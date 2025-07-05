import { FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import bannerImg from "../Image/newbanner.svg";
import prod1 from "../Image/singlepro2.svg";
import prod2 from "../Image/singlepro4.svg";
import prod3 from "../Image/singlepro2.svg";
import prod4 from "../Image/singlepro4.svg";
import prod5 from "../Image/singlepro2.svg";
import prod6 from "../Image/singlepro4.svg";
import { Link } from "react-router-dom";

const products = [
  { id: 1, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod1 },
  { id: 2, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod2 },
  { id: 3, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod3 },
  { id: 4, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod4 },
  { id: 5, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod5 },
  { id: 6, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod6 },
];

export default function NewArrivals() {
  return (
    <section className="relative px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading + arrows */}
        <header className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-wide text-emerald-800">
            NEW ARRIVALS
          </h2>
          <div className="flex gap-3">
            <button className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 transition hover:bg-gray-100">
              <FiChevronLeft className="text-lg text-emerald-700" />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 transition hover:bg-gray-100">
              <FiChevronRight className="text-lg text-emerald-700" />
            </button>
          </div>
        </header>

        {/* Main grid */}
        <div className="grid md:grid-cols-[400px_1fr] gap-6">
          {/* Banner (hidden on mobile) */}
          <figure className="hidden md:block overflow-hidden rounded-lg">
            <img
              src={bannerImg}
              alt="Jewellery ring banner"
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Products */}
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {products.map(({ id, title, oldPrice, price, discount, img }) => (
                <article key={id} className="w-full space-y-3 rounded-lg">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-emerald-700 px-2 py-0.5 text-xs font-medium text-white">
                      -{discount}%
                    </span>
                  </div>

                  <h3 className="text-base leading-snug">{title}</h3>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 line-through">
                        ${oldPrice.toFixed(2)}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        ${price.toFixed(2)}
                      </span>
                    </div>
                    <Link to="/Allproduct">
                      <button className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-gray-400 hover:bg-gray-100">
                        <FiPlus size={12} />
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
