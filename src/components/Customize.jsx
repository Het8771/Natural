import React, { useState } from "react";
import DiamondSear from "./DiamondSear";
import Productgrid from "./Productgrid";
import singlepro3 from "../image/singlepro3.svg";
import { FiMinus, FiPlus, FiHeart,FiEye  } from "react-icons/fi";
import { FiShoppingCart} from "react-icons/fi";
import { Link } from "react-router-dom";

const DiamondSearch = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [diamondType, setDiamondType] = useState("Natural");
  const [isMobileZoomOpen, setIsMobileZoomOpen] = useState(false);

  const stepItems = [
    { step: 1, title: "Choose a Diamond" },
    { step: 2, title: "Choose a Setting" },
    { step: 3, title: "Complete Ring" },
  ];

  
  const similarProducts = [
    {
      id: 1,
      name: "Amrita Antique Designer",
      oldPrice: "$230.00",
      newPrice: "$200.00",
      discount: "-13%",
      image: singlepro3,
    },
    {
      id: 2,
      name: "Zara Royal Jewel",
      oldPrice: "$220.00",
      newPrice: "$190.00",
      discount: "-14%",
      image: singlepro3,
    },
    {
      id: 3,
      name: "Bella Grace Design",
      oldPrice: "$240.00",
      newPrice: "$210.00",
      discount: "-12%",
      image: singlepro3,
    },
    {
      id: 4,
      name: "Evelyn Gold Twist",
      oldPrice: "$210.00",
      newPrice: "$180.00",
      discount: "-15%",
      image: singlepro3,
    },
  ];

  return (
    <div className="px-4 md:px-16 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="text-black">Home</span> / <span className="text-black">Diamonds</span> /{" "}
        <span className="text-gray-400">Diamond Search</span>
      </div>

      {/* Step Progress */}
      <div className="flex flex-col sm:flex-row justify-between items-center border rounded-full overflow-hidden text-center text-[#0A0B33] text-sm md:text-base mb-10">
        {stepItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(item.step)}
            className={`w-full py-4 px-2 sm:px-4 border-b sm:border-b-0 sm:border-r last:border-0 ${
              currentStep === item.step ? "bg-[#F2F2F2] font-bold" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-xl font-semibold">{item.step}</span>
              <span className="font-medium">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* STEP 1 - Choose a Diamond */}
      {currentStep === 1 && (
        <>
          <div className="text-center mt-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A0B33]">Diamond Finder</h2>
            <p className="text-sm md:text-base mt-4 text-[#0A0B33] max-w-2xl mx-auto">
              Use our diamond search feature to find IGI and GIA-graded, conflict-free loose diamonds of the highest quality. Browse thousands of options and use the filters to narrow down the selection.{" "}
              <span className="text-[#0A0B33] underline cursor-pointer">Show More</span>
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-10">
            <div className="flex rounded-full border shadow overflow-hidden">
              {["Natural", "Lab-Grown"].map((type) => (
                <button
                  key={type}
                  onClick={() => setDiamondType(type)}
                  className={`px-6 py-2 text-sm font-medium ${
                    diamondType === type ? "bg-[#0A0B33] text-white" : "bg-white text-[#0A0B33]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Shape Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0B33] mb-4">Shape <span className="text-gray-400">ⓘ</span></h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {["Round", "Princess", "Cushion", "Emerald", "Oval", "Radiant", "Asscher", "Marquise", "Heart", "Pear"].map((shape) => (
                  <button
                    key={shape}
                    className="flex flex-col items-center border-2 rounded-xl px-2 py-3 text-sm font-medium hover:border-[#0A0B33] text-[#0A0B33]"
                  >
                    <div className="w-10 h-10 mb-2 bg-gray-100 rounded-full" />
                    {shape}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0B33] mb-4">Price</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Min Price</span>
                <span>Max Price</span>
              </div>
              <div className="flex justify-between items-center gap-4 mb-2">
                <input className="border rounded px-4 py-2 w-full" value="$200" readOnly />
                <input className="border rounded px-4 py-2 w-full" value="$5,000,000" readOnly />
              </div>
              <input type="range" className="w-full accent-[#0A0B33]" />
            </div>

            {/* Carat Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0B33] mb-4">Carat <span className="text-gray-400">ⓘ</span></h3>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Min Carat</span>
                <span>Max Carat</span>
              </div>
              <div className="flex justify-between items-center gap-4 mb-2">
                <input className="border rounded px-4 py-2 w-full" value="1.00" readOnly />
                <input className="border rounded px-4 py-2 w-full" value="30.00" readOnly />
              </div>
              <input type="range" className="w-full accent-[#0A0B33]" />
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0B33] mb-4">Color <span className="text-gray-400">ⓘ</span></h3>
              <div className="flex justify-between text-sm text-[#0A0B33] mb-2">
                {["K", "J", "I", "H", "G", "F", "E", "D"].map((color) => (
                  <span key={color}>{color}</span>
                ))}
              </div>
              <input type="range" className="w-full accent-[#0A0B33]" />
            </div>

            {/* Clarity Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0B33] mb-4">Clarity <span className="text-gray-400">ⓘ</span></h3>
              <div className="flex justify-between text-sm text-[#0A0B33] mb-2">
                {["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"].map((clarity) => (
                  <span key={clarity}>{clarity}</span>
                ))}
              </div>
              <input type="range" className="w-full accent-[#0A0B33]" />
            </div>

            {/* Cut Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0B33] mb-4">Cut <span className="text-gray-400">ⓘ</span></h3>
              <div className="flex justify-between text-sm text-[#0A0B33] mb-2">
                {["Good", "Very Good", "Excellent", "Astor"].map((cut) => (
                  <span key={cut}>{cut}</span>
                ))}
              </div>
              <input type="range" className="w-full accent-[#0A0B33]" />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className="bg-[#0A0B33] text-white py-2 px-6 rounded-full text-sm font-medium"
              onClick={() => setCurrentStep(2)}
            >
              Next: Choose a Setting
            </button>
          </div>
        </>
      )}

      {/* STEP 2 - Choose a Setting */}
      {currentStep === 2 && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#0A0B33]">
            Engagement Rings & Settings
          </h2>
          <p className="text-sm md:text-base text-center mb-10 text-[#0A0B33] max-w-2xl mx-auto">
            Shop stylish engagement rings and custom designs. Choose from a large variety of engagement ring settings: styles, diamonds, and gemstones to find the right fit.
          </p>

          <div className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto">
            {/* Dropdown Filters */}
            {[
              { label: "Gender", options: ["All", "Men", "Women", "Unisex"] },
              { label: "Rings Style", options: ["Solitaire", "Halo", "Vintage", "Modern"] },
              { label: "Ring Size", options: ["4", "5", "6", "7", "8", "9", "10"] },
              { label: "Shape", options: ["Round", "Princess", "Oval", "Cushion", "Emerald"] },
              { label: "Gemstones", options: ["Diamond", "Sapphire", "Emerald", "Ruby"] },
              { label: "Metal", options: ["Gold", "Platinum", "White Gold", "Rose Gold"] },
              { label: "Rings Width", options: ["2mm", "3mm", "4mm", "5mm"] },
              { label: "Price", options: ["Under $500", "$500 - $1000", "$1000 - $5000", "Over $5000"] },
            ].map(({ label, options }) => (
              <div
                key={label}
                className="flex items-center border border-gray-300 rounded-full px-5 py-2 bg-white text-sm text-[#0A0B33]"
              >
                <label className="mr-2 font-medium whitespace-nowrap">{label}</label>
                <select className="bg-transparent focus:outline-none text-[#0A0B33]">
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            {/* Checkboxes Styled Like Pills */}
            <div className="flex items-center border border-gray-300 rounded-full px-5 py-2 bg-white gap-2 text-sm text-[#0A0B33]">
              <input type="checkbox" id="onSale" className="accent-[#0A0B33]" />
              <label htmlFor="onSale" className="font-medium">On Sale</label>
            </div>

            <div className="flex items-center border border-gray-300 rounded-full px-5 py-2 bg-white gap-2 text-sm text-[#0A0B33]">
              <input type="checkbox" id="engravable" className="accent-[#0A0B33]" />
              <label htmlFor="engravable" className="font-medium">Engravable</label>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3 - Complete Ring */}
      {currentStep === 3 && (
        <div className="text-center mt-20 text-[#0A0B33]">
          <h2 className="text-2xl font-semibold">Complete Ring</h2>
          <p className="mt-4">This section is under construction.</p>
        </div>
      )}

      {/* External Components */}
      <DiamondSear />
       {/* Similar Products */}
       <Link to ="/Singlepro1"><div className="mt-14 mb-10">
  <h3 className="text-xl font-semibold text-[#00715D] mb-6">Similar Products</h3>
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {similarProducts.map((product) => (
      <div
        key={product.id}
        className="group relative border border-gray-200 rounded-lg overflow-hidden transition hover:shadow-lg"
      >
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-[#00715D] text-white text-xs font-semibold px-2 py-0.5 rounded">
            {product.discount}
          </div>
        )}

        {/* Product Image */}
       {/* Product Image */}
<div className="relative overflow-hidden aspect-[4/5]">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
  />

  {/* Top Right Icons (Appear on Hover) */}
  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <Link to="/Singlepro">
      <button className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition">
        <FiEye className="text-gray-700 text-base" />
      </button>
    </Link>
    <button className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition">
      <FiHeart className="text-gray-700 text-base" />
    </button>
  </div>

  {/* Add to Cart on Hover */}
  <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <Link to="/Cart">
      <button className="w-full py-2 bg-[#00715D] text-white text-sm font-medium flex items-center justify-center gap-2">
        <FiShoppingCart />
        Add to Cart
      </button>
    </Link>
  </div>
</div>


        {/* Product Info */}
      <div className="flex items-start justify-between px-3 py-2 bg-white">
          <div>
            <h3 className="text-sm font-medium text-slate-800 line-clamp-1">
              {product.name}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-sm">
              <span className="line-through text-gray-400">
                {product.oldPrice}
              </span>
              <span className="text-[#0A0B33] font-semibold">
                {product.newPrice}
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
</div></Link>


    </div>
  );
};

export default DiamondSearch;
