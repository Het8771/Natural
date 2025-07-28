import React, { useState } from "react";
import product from "../image/singlepro2.svg";
import {
  GiDiamondRing,
  GiEarrings,
  GiNecklaceDisplay,
  GiLinkedRings,
  GiCutDiamond,
  GiHeartNecklace,
} from "react-icons/gi";
import {
  FiPlus,
  FiArrowRight,
  FiEye,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Categories
const categoriesData = [
  { label: "Earring", icon: GiEarrings },
  { label: "Ring", icon: GiDiamondRing },
  { label: "Necklaces", icon: GiNecklaceDisplay },
  { label: "Bracelet", icon: GiLinkedRings },
  { label: "Diamond", icon: GiCutDiamond },
  { label: "Wedding", icon: GiHeartNecklace },
  { label: "Dailywear", icon: GiDiamondRing },
];

// Products
const productsData = [
  {
    id: 1,
    title: "Amrita Antique Designer",
    category: "Earring",
    image: product,
    price: 200,
    oldPrice: 230,
    discount: 13,
  },
  {
    id: 2,
    title: "Amrita Antique Designer",
    category: "Earring",
    image: product,
    price: 200,
    oldPrice: 230,
    discount: 13,
  },
  {
    id: 3,
    title: "Amrita Antique Designer",
    category: "Earring",
    image: product,
    price: 200,
    oldPrice: 230,
    discount: 13,
  },
  {
    id: 4,
    title: "Amrita Antique Designer",
    category: "Earring",
    image: product,
    price: 200,
    oldPrice: 230,
    discount: 13,
  },
];

export default function CategoriesSection() {
  const [active, setActive] = useState("Earring");

  const products = productsData.filter(
    (p) => p.category === active || active === "All"
  );

  const addToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyInWishlist = existing.some((item) => item.id === product.id);
    if (!alreadyInWishlist) {
      const updatedWishlist = [
        ...existing,
        { ...product, qty: 1, price: product.price },
      ];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert("Added to wishlist!");
    } else {
      alert("Already in wishlist");
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-md md:text-2xl font-semibold text-[#00715D] mb-4 sm:mb-0">
          CATEGORIES
        </h2>
        <Link
          to="/Allproduct"
          className="flex items-center gap-1 text-sm text-emerald-700 font-medium hover:text-emerald-800 transition"
        >
          View all <FiArrowRight />
        </Link>
      </div>

      {/* Category Filters */}
      <div className="mb-10 flex overflow-x-auto gap-3 border border-emerald-500 rounded-full p-2 snap-x scroll-smooth">
        {categoriesData.map(({ label, icon: Icon }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm transition duration-200 ${
                isActive
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              <Icon className="text-base" />
              {label}
            </button>
          );
        })}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            {/* Image + Hover Icons */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-emerald-800 text-white text-xs px-2 py-0.5 rounded-full">
                -{product.discount}%
              </span>

              {/* Hover Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to ="/Singlepro"><button
                  className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <FiEye className="text-gray-700 text-sm" />
                </button></Link>
                <button
                  onClick={() => addToWishlist(product)}
                  className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition"
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

            {/* Product Details */}
            <div className="px-2 pt-3 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="line-clamp-1 text-base font-medium text-slate-800">
                    {product.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className="line-through text-slate-400">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-slate-800 font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link to="/Allproduct">
                  <button className="mt-1 h-6 w-6 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition">
                    <FiPlus size={12} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
