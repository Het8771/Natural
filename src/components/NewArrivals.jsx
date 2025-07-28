import { FiChevronLeft, FiChevronRight, FiPlus, FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import bannerImg from "../image/newbanner.svg";
import prod1 from "../image/singlepro2.svg";
import prod2 from "../image/singlepro4.svg";
import prod3 from "../image/singlepro2.svg";
import prod4 from "../image/singlepro4.svg";
import prod5 from "../image/singlepro2.svg";
import prod6 from "../image/singlepro4.svg";
import { Link } from "react-router-dom";

// Dummy products
const products = [
  { id: 1, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod1 },
  { id: 2, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod2 },
  { id: 3, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod3 },
  { id: 4, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod4 },
  { id: 5, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod5 },
  { id: 6, title: "Amrita Antique Designer", oldPrice: 230, price: 200, discount: 13, img: prod6 },
];

// Wishlist handler
const addToWishlist = (product) => {
  const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
  const alreadyInWishlist = existing.some((item) => item.id === product.id);
  if (!alreadyInWishlist) {
    const updatedWishlist = [...existing, { ...product, qty: 1 }];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert("Added to wishlist!");
  } else {
    alert("Already in wishlist");
  }
};

export default function NewArrivals() {
  return (
    <section className="relative px-4 py-3 min-h-screen">
      <div className="mx-auto max-w-7xl p-3">
        {/* Heading + Arrows */}
        <header className="mb-3 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-wide text-[#00715D]">NEW ARRIVALS</h2>
          <div className="flex gap-3">
            <button className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 transition hover:bg-gray-100">
              <FiChevronLeft className="text-lg text-emerald-700" />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 transition hover:bg-gray-100">
              <FiChevronRight className="text-lg text-emerald-700" />
            </button>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-[400px_1fr] gap-6">
          {/* Banner */}
          <figure className="hidden md:block overflow-hidden rounded-lg">
            <img src={bannerImg} alt="Jewellery ring banner" className="h-full w-full object-cover" />
          </figure>

          {/* Products */}
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="relative group w-full rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  {/* Image with Hover Icons */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-emerald-700 px-2 py-0.5 text-xs font-medium text-white">
                      -{product.discount}%
                    </span>

                    {/* Hover Icons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to ="/Singlepro"><button
                        className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                      >
                        <FiEye className="text-gray-700 text-sm" />
                      </button></Link>
                      <button
                        onClick={() => addToWishlist(product)}
                        className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                      >
                        <FiHeart className="text-gray-700 text-sm" />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to="/Cart">
                        <button className="w-full py-2 bg-[#00715D] text-white text-sm flex items-center justify-center gap-2">
                          <FiShoppingCart />
                          Add to Cart
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Title + Price + Plus Button */}
                  <div className="px-2 pt-3 pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-medium leading-snug text-slate-800 line-clamp-1">
                          {product.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <span className="text-xs text-gray-400 line-through whitespace-nowrap">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                          <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <Link to="/Allproduct">
                        <button className="mt-1 ml-2 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-gray-400 hover:bg-gray-100">
                          <FiPlus size={12} />
                        </button>
                      </Link>
                    </div>
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
