import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import ring from "../image/ring.jpg";
import ring1 from "../image/ring1.jpg";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const [selectedMetal, setSelectedMetal] = useState("14k Yellow Gold");
  const [selectedCarat, setSelectedCarat] = useState("0.5");
  const [selectedSize, setSelectedSize] = useState("");

  const metalOptions = [
    "14k White Gold",
    "14k Yellow Gold",
    "14k Rose Gold",
    "Platinum",
  ];
  const caratOptions = ["0.25", "0.5", "1"];
  const sizeOptions = ["Select Ring Size", "6", "7", "8"];

  const [showMore, setShowMore] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Home
          </a>{" "}
          /
          <a href="#" className="hover:underline mx-1">
            Wedding Rings
          </a>{" "}
          /
          <a href="#" className="hover:underline mx-1">
            All Wedding Rings
          </a>{" "}
          /<span>Ring Jewel - 606629Y1402</span>
        </div>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Images */}
          <div className="grid grid-cols-2 gap-3 ">
            <img
              src={ring1}
              alt="Ring view 1"
              className="rounded-lg w-full object-cover"
            />
            <img
              src={ring}
              alt="Ring view 2"
              className="rounded-lg w-full object-cover"
            />
            <img
              src={ring}
              alt="Ring view 3"
              className="rounded-lg w-full object-cover"
            />
            <img
              src={ring1}
              alt="Ring view 4"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right - Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black">
              Luna Diamond Ring In 14k Yellow Gold (1/2 Ct. Tw.)
            </h2>

            {/* Ring Size */}
            <div className="flex items-center gap-4">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              >
                {sizeOptions.map((size) => (
                  <option
                    key={size}
                    value={size === "Select Ring Size" ? "" : size}
                  >
                    {size}
                  </option>
                ))}
              </select>
              <a
                href="#"
                className="text-sm text-blue-900 underline font-medium"
              >
                Ring Size Help
              </a>
            </div>

            {/* Engraving */}
            <div className="text-sm text-blue-900 font-medium hover:underline cursor-pointer">
              + Add Free Engraving
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900">$1,860</div>
            <p className="text-gray-600 text-sm">
              3 interest-free payments of $620{" "}
              <span className="inline-block ml-1 text-gray-500">ⓘ</span>
            </p>

            {/* Metal Selection */}
            <div>
              <p className="font-medium mb-2">
                Metal Type:{" "}
                <span className="font-semibold">{selectedMetal}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {metalOptions.map((metal) => (
                  <button
                    key={metal}
                    onClick={() => setSelectedMetal(metal)}
                    className={`px-4 py-1.5 border rounded-full text-sm transition ${
                      selectedMetal === metal
                        ? "border-yellow-500 text-yellow-600 font-semibold"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {metal.includes("Platinum") ? "Pt" : "14k"}
                  </button>
                ))}
              </div>
            </div>

            {/* Carat Weight */}
            <div>
              <p className="font-medium mb-2">
                Total Carat Weight:{" "}
                <span className="font-semibold">{selectedCarat} ct. tw.</span>
              </p>
              <div className="flex gap-4">
                {caratOptions.map((carat) => (
                  <button
                    key={carat}
                    onClick={() => setSelectedCarat(carat)}
                    className={`px-4 py-1.5 border rounded-lg text-sm transition ${
                      selectedCarat === carat
                        ? "border-blue-500 text-blue-700 font-semibold"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {carat}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart + Expert Button */}
            <div>
              <Link to="/Cart">
                <button className="w-full border border-gray-500 hover:bg-teal-700 hover:text-white py-3 rounded-md text-lg font-medium cursor-pointer transition mb-3">
                  ADD TO CART
                </button>
              </Link>

              <button className="w-full border border-gray-500 text-blue-950 py-3 rounded-md text-lg font-medium hover:bg-teal-700 hover:text-white transition cursor-pointer">
                CONSULT AN EXPERT
              </button>
            </div>

            {/* Shipping Info */}
            <div className="space-y-1 text-sm">
              <p className="text-gray-800">
                Ships by: <strong>Monday, July 28</strong>{" "}
                <span className="ml-1 text-gray-500">ⓘ</span>
              </p>
              <p className="flex items-center gap-2 text-blue-700 font-medium">
                <span className="text-xl">🚚</span> Next Day Shipping
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                <span className="text-xl">📦</span> Free Overnight Shipping
                Hassle-Free Returns
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stock Info */}
        <div className="grid grid-cols-2 pt-6 mt-6 text-sm text-gray-700">
          <div>
            <p className="text-gray-400">Stock Number</p>
            <p>606629Y1402</p>
          </div>
          <div>
            <p className="text-gray-400">Metal</p>
            <p>14K Yellow Gold</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          {/* Stock Number */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-700 font-medium">Stock Number</span>
            <span className="text-gray-900">606629Y1402</span>
          </div>

          {/* Metal */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-700 font-medium">Metal</span>
            <span className="text-gray-900">14K Yellow Gold</span>
          </div>

          {/* Width */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-700 font-medium">Width</span>
            <span className="text-gray-900">2.00 mm</span>
          </div>

          {/* Show More */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#1A1A1A] transition"
          >
            <FiPlus className="text-base" />
            Show More
          </button>

          {showMore && (
            <div className="space-y-2 pl-2 text-sm text-gray-700">
              <div>Finish: High Polish</div>
              <div>Fit: Comfort Fit</div>
              <div>Country: Made in India</div>
            </div>
          )}
        </div>

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Integer blandit velit nec sapien aliquet.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
