/* ─── src/components/ProductsSection.jsx ─────────────────────────────────── */
import React from "react";
import { FiPlus } from "react-icons/fi";
import earring from "../Image/singlepro2.svg";
import { Link } from "react-router-dom";

/* ── Fake list – duplicate / replace with real data ──────────────────────── */
const products = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  name: "Amrita Antique Designer",
  oldPrice: 230,
  newPrice: 200,
  discount: 13,
  img: earring,
}));

/* ── Single card ─────────────────────────────────────────────────────────── */
const ProductCard = ({ p }) => (
  <div className="w-full">
  {/* image + badge */}
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-md">
  <img
    src={p.img}
    alt={p.name}
    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <span className="absolute top-3 left-3 rounded-md bg-[#0d5b53] px-2 py-0.5 text-xs font-medium text-white">
    -{p.discount}%
  </span>
</div>


    {/* title + price row */}
    <div className="mt-4 flex items-start justify-between">
      <div>
        <h3 className="text-base leading-snug">{p.name}</h3>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm text-gray-400 line-through">
            ${p.oldPrice.toFixed(2)}
          </span>
          <span className="text-sm font-bold">${p.newPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* little ⊕ button */}
      <Link to="/Allproduct">
        <button className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-gray-400 hover:bg-gray-100">
          <FiPlus size={12} />
        </button>
      </Link>
    </div>
  </div>
);

/* ── Section wrapper ─────────────────────────────────────────────────────── */
const ProductsSection = () => (
  <section className="mx-auto min-h-screen px-5 py-12">
    {/* top row */}
    <div className="mb-10 flex items-center justify-between">
      <h2 className="text-xl font-bold uppercase tracking-wide text-[#0d5b53]">
        All Product
      </h2>

      <Link
        to="/Allproducts"
        className="flex items-center gap-1 text-sm font-medium text-[#0d5b53] hover:underline"
      >
        View all <span className="text-lg leading-none">→</span>
      </Link>
    </div>

    {/* products */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  </section>
);

export default ProductsSection;
