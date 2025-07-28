import React, { useState } from "react";
import { FiGrid, FiList, FiPlus, FiHeart, FiEye, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const productsData = [
  {
    id: 1,
    name: "Amrita Antique Designer",
    oldPrice: 230,
    newPrice: 200,
    discount: "-17%",
    image: "https://images.pexels.com/photos/4672719/pexels-photo-4672719.jpeg",
    color: "Gold",
    size: "6",
  },
  {
    id: 2,
    name: "Zara Royal Jewel",
    oldPrice: 210,
    newPrice: 180,
    discount: "-14%",
    image: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg",
    color: "Silver",
    size: "7",
  },
  {
    id: 3,
    name: "Bella Grace Design",
    oldPrice: 250,
    newPrice: 210,
    discount: "-16%",
    image: "https://images.pexels.com/photos/1470504/pexels-photo-1470504.jpeg",
    color: "Rose Gold",
    size: "8",
  },
  {
    id: 4,
    name: "Evelyn Gold Twist",
    oldPrice: 240,
    newPrice: 220,
    discount: "-8%",
    image: "https://images.pexels.com/photos/1457984/pexels-photo-1457984.jpeg",
    color: "Gold",
    size: "7",
  },
  {
    id: 5,
    name: "Chloe Elegant Band",
    oldPrice: 230,
    newPrice: 200,
    discount: "-17%",
    image: "https://images.pexels.com/photos/1375148/pexels-photo-1375148.jpeg",
    color: "Silver",
    size: "6",
  },
  {
    id: 6,
    name: "Aurora Pearl Line",
    oldPrice: 260,
    newPrice: 210,
    discount: "-19%",
    image: "https://images.pexels.com/photos/1100790/pexels-photo-1100790.jpeg",
    color: "Rose Gold",
    size: "8",
  },
];

const addToWishlist = (product) => {
  const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
  const alreadyInWishlist = existing.some((item) => item.id === product.id);

  if (!alreadyInWishlist) {
    const updatedWishlist = [...existing, { ...product, qty: 1, price: product.newPrice }];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert("Added to wishlist!");
  } else {
    alert("Already in wishlist");
  }
};

const Allproduct = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [sortOrder, setSortOrder] = useState("az");

  const filteredProducts = productsData
    .filter((product) => {
      const colorMatch = selectedColor ? product.color === selectedColor : true;
      const sizeMatch = selectedSize ? product.size === selectedSize : true;
      return colorMatch && sizeMatch;
    })
    .sort((a, b) => {
      if (sortOrder === "az") return a.name.localeCompare(b.name);
      if (sortOrder === "za") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto bg-white md:px-12 py-4 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">
            Product Listing &gt; Dummy Product Page
          </p>
          <div className="flex gap-3 flex-wrap">
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className={`text-white text-sm px-4 py-1.5 rounded-full shadow transition outline-none bg-teal-700 ${
                selectedColor === "Gold"
                  ? "bg-teal-700"
                  : selectedColor === "Silver"
                  ? "bg-teal-700"
                  : selectedColor === "Rose Gold"
                  ? "bg-teal-700"
                  : ""
              }`}
            >
              <option value="">Select Color</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Rose Gold">Rose Gold</option>
            </select>

            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-teal-700 text-white text-sm px-4 py-1.5 rounded-full shadow outline-none transition"
            >
              <option value="">Select Size</option>
              <option value="6">Size 6</option>
              <option value="7">Size 7</option>
              <option value="8">Size 8</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 rounded-full border block md:hidden ${
              isGridView ? "bg-teal-700 text-white" : "text-gray-600"
            }`}
          >
            <FiGrid />
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 rounded-full border block md:hidden ${
              !isGridView ? "bg-teal-700 text-white" : "text-gray-600"
            }`}
          >
            <FiList />
          </button>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-teal-700 text-white text-sm px-4 py-1.5 rounded-full outline-none shadow transition"
          >
            <option value="az">Name A-Z</option>
            <option value="za">Name Z-A</option>
          </select>
        </div>
      </div>

      {/* Product Layout */}
      {isGridView ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden outline-none rounded-lg shadow-sm">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-emerald-800 text-white text-xs px-2 py-0.5 rounded-full">
                  {product.discount}
                </span>
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to ="/Singlepro"><button
                    className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                  >
                    <FiEye className="text-gray-700 text-sm" />
                  </button></Link>
                  <button
                    className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                    onClick={() => addToWishlist(product)}
                  >
                    <FiHeart className="text-gray-700 text-sm" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full py-2 bg-[#00715D] text-white text-sm flex items-center justify-center gap-2">
                    <FiShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="px-3 pt-3 pb-4">
                <div className="flex justify-between">
                <h3 className="text-base font-medium text-slate-800 line-clamp-1">
                  {product.name}
                </h3>
                <Link to="/Allproduct">
                <button className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition">
                  <FiPlus size={12} />
                </button>
              </Link>
              </div>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="line-through text-slate-400">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                  <span className="text-slate-800 font-semibold">
                    ${product.newPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4"
            >
              <div className="w-full sm:w-1/4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-lg font-medium text-slate-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Color: {product.color} | Size: {product.size}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      ${product.newPrice.toFixed(2)}
                    </span>
                  </div>
               
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Allproduct;
