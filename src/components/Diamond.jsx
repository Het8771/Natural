import React, { useState } from "react";
import { FiPlus, FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import {
  GiDiamondRing,
  GiEarrings,
  GiNecklaceDisplay,
  GiLinkedRings,
  GiCutDiamond,
  GiHeartNecklace,
} from "react-icons/gi";
import { Truck, ShieldCheck, Headset } from "lucide-react";
import { Link } from "react-router-dom";

// Images
import diamond from "../image/diamond.svg";
import Oval from "../image/Oval.svg";
import Pear from "../image/Pear.svg";
import Princess from "../image/Princess.svg";
import Radiant from "../image/Radiant.svg";
import Round from "../image/Round.svg";
import Heart from "../image/Heart.svg";
import Marquise from "../image/Marquise.svg";
import Cushion from "../image/Cushion.svg";
import Emerald from "../image/Emerald.svg";
import earring from "../image/singlepro2.svg";
import diamond1 from "../image/diamond1.svg";
import diamond2 from "../image/diamond2.svg";
import diamond3 from "../image/diamond3.svg";
import diamond4 from "../image/diamond4.svg";

const diamondShapes = [
  { label: "OVAL", image: Oval },
  { label: "PEAR", image: Pear },
  { label: "MARQUISE", image: Marquise },
  { label: "RADIANT", image: Radiant },
  { label: "CUSHION", image: Cushion },
  { label: "EMERALD", image: Emerald },
  { label: "PRINCESS", image: Princess },
  { label: "ROUND", image: Round },
  { label: "HEART", image: Heart },
];

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
    name: "Amrita Antique Designer",
    oldPrice: 230,
    newPrice: 200,
    discount: 13,
    img: earring,
    category: "Earring",
  },
  {
    id: 2,
    name: "Elegant Gold Ring",
    oldPrice: 180,
    newPrice: 150,
    discount: 17,
    img: earring,
    category: "Ring",
  },
  {
    id: 3,
    name: "Diamond Necklace",
    oldPrice: 500,
    newPrice: 420,
    discount: 16,
    img: earring,
    category: "Necklaces",
  },
  {
    id: 4,
    name: "Classic Bracelet",
    oldPrice: 300,
    newPrice: 260,
    discount: 13,
    img: earring,
    category: "Bracelet",
  },
];

const ProductCard = ({ p }) => (
  <div className="relative group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
    <div className="relative overflow-hidden aspect-[4/5]">
      <img
        src={p.img}
        alt={p.name}
        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
      />
      
      
      <span className="absolute top-3 left-3 rounded-md bg-[#0d5b53] px-2 py-0.5 text-xs font-medium text-white shadow">
        -{p.discount}%
      </span>
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition">
          <FiEye className="text-gray-700 text-sm" />
        </button>
        <button className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition">
          <FiHeart className="text-gray-700 text-sm" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-full py-2 bg-[#00715D] text-white text-sm flex items-center justify-center gap-2">
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
    <div className="p-3">
      <div className="flex justify-between">
      <h3 className="text-md font-semibold text-gray-800 line-clamp-1">{p.name}</h3>
      <button className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition">
                    <FiPlus size={14} />
                  </button>
                  </div>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-sm text-gray-400 line-through">
          ${p.oldPrice.toFixed(2)}
        </span>
        <span className="text-sm font-bold text-[#0d5b53]">
          ${p.newPrice.toFixed(2)}
        </span>
      </div>
    </div>
  </div>
);

const DiamondShapes = () => {
  const [active, setActive] = useState("Earring");
  const filteredProducts = productsData.filter(
    (p) => p.category === active || active === "All"
  );

  return (
    <div className="w-full bg-white text-center">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <img src={diamond} alt="Diamond Background" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-6 text-white text-lg font-medium">Home</div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#0d5b53] text-lg md:text-xl font-semibold uppercase tracking-wide mb-8">
            Explore Diamonds
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {diamondShapes.map((shape) => (
              <div
                key={shape.label}
                className="flex flex-col items-center w-[70px] cursor-pointer transition-transform hover:scale-110 hover:shadow-md"
              >
                <img src={shape.image} alt={shape.label} className="w-12 h-12 object-contain mb-2" />
                <span className="text-xs md:text-sm font-medium text-gray-700">{shape.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0d5b53]">Explore Diamond Products</h2>
          </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <img src={diamond1} alt="1" className="rounded-xl shadow-lg w-full" />
            <img src={diamond2} alt="2" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="md:col-span-2">
            <img src={diamond3} alt="3" className="rounded-xl shadow-lg w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full bg-teal-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Truck size={32} className="mb-2" />
            <h4 className="font-semibold text-lg">FREE SHIPPING</h4>
            <p className="text-sm">Free shipping available in India.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck size={32} className="mb-2" />
            <h4 className="font-semibold text-lg">SECURE PAYMENT</h4>
            <p className="text-sm">100% Secure payment</p>
          </div>
          <div className="flex flex-col items-center">
            <Headset size={32} className="mb-2" />
            <h4 className="font-semibold text-lg">SUPPORT</h4>
            <p className="text-sm">You can contact us with email</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <img src={diamond4} alt="Diamonds" className="w-full h-[300px] sm:h-[400px] object-cover" />
      </div>
    </div>
  );
};

export default DiamondShapes;
