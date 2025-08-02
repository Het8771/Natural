import React from "react";
import diamond2 from "../image/diamond2.svg";
import diamond3 from "../image/diamond3.svg";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";

const GemstoneDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Back Button */}
      <div className="text-sm text-blue-600 mb-4 cursor-pointer hover:underline">
        ← Back To Gallery
      </div>

      {/* Grid with Equal Widths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery + Table */}
        <div className="flex flex-col gap-6">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={diamond3}
                alt="Gemstone 1"
                className="rounded-md w-full h-auto"
              />
              <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-full shadow">
                360°
              </div>
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-full shadow">🔍</button>
                <button className="bg-white p-2 rounded-full shadow">＋</button>
              </div>
            </div>
            <img
              src={diamond2}
              alt="Gemstone 2"
              className="rounded-md w-full h-auto"
            />
          </div>

          {/* Details Table */}
          <div className="space-y-2 text-sm">
            {[
              { label: "Stock Number", value: "111557" },
              { label: "Variety", value: "Sapphire" },
              { label: "Species", value: "Corundum" },
              { label: "Color", value: "Blue" },
              { label: "Shape", value: "Round" },
              { label: "Carat", value: "2.01" },
              { label: "Measurements (mm)", value: "6.84x6.84x4.84" },
              { label: "Treatment", value: "Heated" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between bg-gray-50 px-4 py-2 rounded"
              >
                <span className="text-gray-700 font-medium">{item.label}</span>
                <span className="text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            2.01 Carat Round Natural Blue Sapphire
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-100 px-2 py-1 rounded">Sapphire</span>
            <span className="bg-gray-100 px-2 py-1 rounded">Blue</span>
            <span className="bg-gray-100 px-2 py-1 rounded">
              6.84×6.84×4.84mm
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded">2.01ct</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-900">$890</div>
          <div className="text-sm text-gray-600">(Gemstone Price)</div>

          {/* Certification */}
          <div className="flex items-center justify-between py-2 border-t border-b text-sm">
            <span>Certificate</span>
            <a href="#" className="text-blue-600 hover:underline">
              View Report
            </a>
          </div>

          {/* Additional Info */}
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Stock Number</span>
              <span>111557</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Variety</span>
              <span>Sapphire</span>
            </div>
          </div>

          {/* Buttons */}
          <Link to="/Singlepro2">
            <button className="w-full bg-[#0e0d45] hover:bg-[#000032] text-white py-3 rounded mt-4">
              SELECT THIS GEMSTONE
            </button>
          </Link>
          <button className="w-full border border-[#0e0d45] text-[#0e0d45] py-3 rounded mt-2 hover:bg-[#f6f6ff]">
            CONSULT AN EXPERT
          </button>

          {/* Shipping & Return */}
          <div className="text-sm text-gray-800 mt-2">
            Ships by: <span className="font-semibold">Thursday, July 31</span>
          </div>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline flex items-center gap-2"
          >
            🚚 Free Overnight Shipping Hassle-Free Returns
          </a>

          {/* Divider */}
          <hr className="my-4" />

          {/* Right Section - Accordion */}
          <div className="space-y-4">
            {[
              "Your Order Includes",
              "Product Details",
              "Secure Shopping",
              "Lifetime Product Warranty",
            ].map((title, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 cursor-pointer"
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center"
                >
                  <span className="text-base font-semibold text-[#1A1A1A]">
                    {title}
                  </span>
                  {activeAccordion === index ? (
                    <FiMinus className="text-[#1A1A1A]" />
                  ) : (
                    <FiPlus className="text-[#1A1A1A]" />
                  )}
                </div>

                {activeAccordion === index && (
                  <div className="mt-3 text-sm text-gray-600">
                    {/* Replace this with actual content if needed */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla facilisi. Integer blandit velit nec sapien aliquet.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemstoneDetails;
