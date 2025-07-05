import React, { useState } from "react";
import { FaRing, FaGem } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import customize from "../Image/customize.svg";
import customize1 from "../Image/customize1.svg";

const shapeImages = {
  Round: "https://i.imgur.com/F6zWxGv.png",
  Princess: "https://i.imgur.com/SzBfGsZ.png",
  Radiant: "https://i.imgur.com/MHNjQgr.png",
  Emerald: "https://i.imgur.com/HXYmfZG.png",
  Marquise: "https://i.imgur.com/lEpmekB.png",
  Oval: "https://i.imgur.com/pwGGfI8.png",
  Pear: "https://i.imgur.com/L6AG8OL.png",
  Heart: "https://i.imgur.com/kEtUE5A.png",
  Asscher: "https://i.imgur.com/tDZGsgo.png",
  Cushion: "https://i.imgur.com/JTqjMYo.png",
};

const headStyles = [
  { label: "4-Prong Nouveau", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "6-Prong Nouveau", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Classic Basket", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Diamond Basket", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Surprise Diamond", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "6-Prong Diamond", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Diamond Tulip", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Classic Halo", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Floral Halo", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Hidden Halo", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Dual Halo", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Fancy Halo", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Clustered Diamond", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Vintage Trefoil", img: "https://i.imgur.com/G2JfZ5x.png" },
  { label: "Classic Bezel", img: "https://i.imgur.com/G2JfZ5x.png" },
];

const bandStyles = [
  "Solitaire", "Knife Edge Solitaire", "Split Ring Solitaire", "France Pavé", "Cathedral Pavé",
  "Triple Row Pavé", "Round Channel", "Baguette Channel", "Floating Station", "Alternating Marquise",
  "Three Stone", "Knife Edge Pavé", "Flora Bypass", "Twist Pavé", "Alternating Baguette"
];

const metals = [
  { label: "14", color: "#F5D7BF" },
  { label: "14", color: "#F4F4F4" },
  { label: "14", color: "#FF5A5F" },
  { label: "18", color: "#D9D9D9" },
  { label: "18", color: "#FFD700" },
  { label: "18", color: "#FF5A5F" },
  { label: "P", color: "#B4B4B4" },
];

const faqs = [
  {
    title: "Discreet Packaging",
    content: "All packages are shipped in unmarked boxes for added privacy and security.",
  },
  {
    title: "Secure and Convenient Pickup Option",
    content: "We offer secure pickup locations for added flexibility and convenience.",
  },
  {
    title: "Free Shipping",
    content: "Enjoy complimentary shipping on all orders with tracking included.",
  },
];

const RingCustomizer = () => {
  const [selectedShape, setSelectedShape] = useState("Round");
  const [selectedSize, setSelectedSize] = useState("1 ct");
  const [selectedHead, setSelectedHead] = useState(headStyles[0].label);
  const [selectedBand, setSelectedBand] = useState(bandStyles[0]);
  const [selectedMetal, setSelectedMetal] = useState(metals[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-12">
      {/* Step Tracker */}
      <div className="max-w-5xl mx-auto rounded-xl border border-teal-700 overflow-hidden">
  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-teal-700 text-center text-sm md:text-base">
    <div className="flex items-center justify-between sm:justify-center px-4 py-4 gap-2">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">1</span>
        <span>Choose a Setting</span>
      </div>
      <FaRing className="text-xl sm:hidden" />
    </div>
    <div className="flex items-center justify-between sm:justify-center px-4 py-4 gap-2">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">2</span>
        <span>Choose a Diamond</span>
      </div>
      <FaGem className="text-xl sm:hidden" />
    </div>
    <div className="flex items-center justify-between sm:justify-center px-4 py-4 gap-2">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">3</span>
        <span>Complete Ring</span>
      </div>
      <GiDiamondRing className="text-xl sm:hidden" />
    </div>
  </div>
</div>


      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <img key={i} src={customize} alt="Ring Preview" className="rounded-md object-cover w-full h-auto" />
          ))}
        </div>

        <div className="space-y-6">
          {/* Shape */}
          <div>
            <h2 className="text-lg font-semibold">Diamond Preview</h2>
            <p className="text-sm mb-2">Preview Shape:</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {Object.keys(shapeImages).map((shape) => (
                <button
                  key={shape}
                  onClick={() => setSelectedShape(shape)}
                  className={`flex flex-col items-center p-2 border rounded-md text-center text-xs ${
                    selectedShape === shape ? "border-teal-600" : "border-gray-300 hover:border-gray-700"
                  }`}
                >
                  <img src={shapeImages[shape]} alt={shape} className="w-10 h-10 object-contain" />
                  <span>{shape}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h3 className="font-semibold mb-2">Preview Size:</h3>
            <div className="flex flex-wrap gap-2">
              {["1 ct", "1.5 ct", "2 ct"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 border rounded-full text-sm ${
                    selectedSize === size ? "bg-teal-700 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Head */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Head</h3>
            <p className="mb-2">Select Style:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {headStyles.map(({ label, img }) => (
                <button
                  key={label}
                  onClick={() => setSelectedHead(label)}
                  className={`p-2 border rounded-md flex flex-col items-center text-xs ${
                    selectedHead === label ? "border-teal-700" : "border-gray-300 hover:border-gray-700"
                  }`}
                >
                  <img src={img} alt={label} className="w-10 h-10 object-contain" />
                  <span className="text-center mt-1">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Band */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Band</h3>
            <p className="mb-2">Select Style:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {bandStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedBand(style)}
                  className={`p-2 border rounded-md text-xs text-center ${
                    selectedBand === style ? "border-teal-700" : "border-gray-300 hover:border-gray-700"
                  }`}
                >
                  <img src="https://i.imgur.com/zFLHdd3.png" alt={style} className="w-10 h-10 mx-auto mb-1" />
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Metal */}
          <div>
            <h3 className="font-semibold mb-2">Select Metal:</h3>
            <div className="flex flex-wrap gap-3">
              {metals.map((metal, i) => {
                const isSelected = selectedMetal.label === metal.label && selectedMetal.color === metal.color;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedMetal(metal)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      isSelected ? "ring-2 ring-teal-600" : ""
                    }`}
                    style={{ backgroundColor: metal.color }}
                  >
                    <span className="text-xs font-bold">{metal.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="bg-teal-800 hover:bg-teal-900 text-white rounded-full w-full py-2">
              Select This Setting
            </button>
            <button className="border border-teal-700 text-teal-800 hover:bg-teal-50 rounded-full w-full py-2">
              Real-Time Ring Inspection
            </button>
          </div>
        </div>
      </div>

      {/* Shipping */}
      <div className="max-w-7xl mx-auto mt-16 p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center">
          <img src={customize1} alt="Ring Packaging" className="w-full max-w-sm" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-teal-800">
            We’re committed to making your entire experience a pleasant one, from shopping to shipping.
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Every item we send comes in our signature packaging. Rings arrive in a deluxe box, complete with
            presentation case, diamond grading report, and certificate.
          </p>
          <div className="mt-6 divide-y border-t border-b">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-4 text-teal-700 font-medium hover:text-teal-900 transition"
                >
                  <span>{faq.title}</span>
                  <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="text-gray-600 pb-4 text-sm">{faq.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingCustomizer;
