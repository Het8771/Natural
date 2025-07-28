import React from "react";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import earring from "../image/singlepro2.svg";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";

// Dummy product data
const products = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  name: "Amrita Antique Designer",
  oldPrice: 230,
  newPrice: 200,
  discount: 13,
  img: earring,
}));

// Add to wishlist handler
const addToWishlist = (product) => {
  const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
  const alreadyInWishlist = existing.some((item) => item.id === product.id);

  if (!alreadyInWishlist) {
    const updatedWishlist = [
      ...existing,
      { ...product, qty: 1, price: product.newPrice },
    ];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert("Added to wishlist!");
  } else {
    alert("Already in wishlist");
  }
};

const ProductCard = ({ p }) => (
  <>
    <div className="relative group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Image + Discount */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 rounded-md bg-[#0d5b53] px-2 py-0.5 text-xs font-medium text-white">
          -{p.discount}%
        </span>

        {/* Hover Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to ="/Singlepro"><button
            className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FiEye className="text-gray-700 text-sm" />
          </button></Link>

          <button
            onClick={() => addToWishlist(p)}
            className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FiHeart className="text-gray-700 text-sm" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to="/Cart">
            <button className="w-full py-2 bg-[#00715D] text-white text-sm flex items-center justify-center gap-2 cursor-pointer">
              <FiShoppingCart />
              Add to Cart
            </button>
          </Link>
        </div>
      </div>

      {/* Title + Price */}
      <div className="px-2 pt-3 pb-4">
        <div className="flex justify-between">
          <h3 className="text-base font-medium text-slate-800 line-clamp-1">
            {p.name}
          </h3>
          <Link to="/Allproduct">
            <button className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer transition">
              <FiPlus size={12} />
            </button>
          </Link>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className="line-through text-slate-400">
            ${p.oldPrice.toFixed(2)}
          </span>
          <span className="text-slate-800 font-semibold">
            ${p.newPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  </>
);

const ProductsSection = () => (
  <section className="mx-auto max-w-7xl px-6 py-12">
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-xl font-bold uppercase tracking-wide text-[#00715D]">
        All Product
      </h2>
      <Link
        to="/Allproducts"
        className="flex items-center gap-1 text-sm font-medium text-[#0d5b53] hover:underline"
      >
        View all <span className="text-lg leading-none">→</span>
      </Link>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  </section>
);

export default ProductsSection;
