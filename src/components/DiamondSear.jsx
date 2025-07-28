import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { BsGrid3X3Gap, BsList } from "react-icons/bs";
import { PiDiamondsFourLight } from "react-icons/pi";

const DiamondSearch = () => {
  const [fastShipping, setFastShipping] = useState(false);
  const [shippingDate, setShippingDate] = useState("Any Date");
  const [sortBy, setSortBy] = useState("Best Match");
  const [viewType, setViewType] = useState("grid");

  const handleResetFilters = () => {
    setFastShipping(false);
    setShippingDate("Any Date");
    setSortBy("Best Match");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Filters Section */}
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={fastShipping}
              onChange={() => setFastShipping(!fastShipping)}
              className="accent-indigo-600 w-4 h-4"
            />
            <span className="text-gray-800 font-medium">Fast Shipping</span>
          </label>

          <button
            onClick={handleResetFilters}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm text-gray-800"
          >
            <FiRefreshCw className="w-4 h-4" />
            <span>Reset Filters</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Shipping Date By:</span>
            <select
              value={shippingDate}
              onChange={(e) => setShippingDate(e.target.value)}
              className="bg-transparent font-medium text-gray-800 focus:outline-none"
            >
              <option>Any Date</option>
              <option>Next 7 Days</option>
              <option>This Month</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-medium text-gray-800 focus:outline-none"
            >
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Right Filters Section */}
        {/* <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full border border-gray-400 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
            Advanced Filters <span className="ml-1">+</span>
          </button>

          <div className="text-sm text-gray-500 hidden sm:block">
            7,696 of 157,741 Results
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <button
              className={`p-2 rounded hover:bg-gray-100 ${
                viewType === "grid" ? "text-black" : ""
              }`}
              onClick={() => setViewType("grid")}
            >
              <BsGrid3X3Gap className="w-5 h-5" />
            </button>

            <button
              className={`p-2 rounded hover:bg-gray-100 ${
                viewType === "diamond" ? "text-black" : ""
              }`}
              onClick={() => setViewType("diamond")}
            >
              <PiDiamondsFourLight className="w-5 h-5" />
            </button>

            <button
              className={`p-2 rounded hover:bg-gray-100 ${
                viewType === "list" ? "text-black" : ""
              }`}
              onClick={() => setViewType("list")}
            >
              <BsList className="w-5 h-5" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DiamondSearch;
