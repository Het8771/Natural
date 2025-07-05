import React, { useState } from "react";
import product from "../Image/singlepro2.svg";
import {
  GiDiamondRing,
  GiEarrings,
  GiNecklaceDisplay,
  GiLinkedRings,
  GiCutDiamond,
  GiHeartNecklace,
} from "react-icons/gi";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Category and Product Data
const categoriesData = [
  { label: "Earring", icon: GiEarrings },
  { label: "Ring", icon: GiDiamondRing },
  { label: "Necklaces", icon: GiNecklaceDisplay },
  { label: "Bracelet", icon: GiLinkedRings },
  { label: "Diamond", icon: GiCutDiamond },
  { label: "Wedding", icon: GiHeartNecklace },
  { label: "Dailywear", icon: GiDiamondRing },
];

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

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4 sm:mb-0">
          Categories
        </h2>

        <Link
          to="/Allproduct"
          className="flex items-center gap-1 text-sm text-emerald-700 font-medium hover:text-emerald-800 transition"
        >
          View all <FiArrowRight />
        </Link>
      </div>

     {/* Category Filter Pills */}
     <div className="mb-10 flex overflow-x-auto gap-3 border border-emerald-500 rounded-full p-2 snap-x scroll-smooth mobile-scroll-block">
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


      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* Image Block */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-emerald-800 text-white text-xs px-2 py-0.5 rounded-full">
                -{product.discount}%
              </span>
            </div>

            {/* Product Info */}
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
                <button className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition">
                  <FiPlus size={12} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
