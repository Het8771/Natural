import React, { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import wishlisti from "../Image/wishlisti.svg";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    const enriched = stored.map((item) => ({ ...item, qty: 1 }));
    setItems(enriched);
  }, []);

  const handleQtyChange = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto space-y-10 w-full">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
  <Link to="/" className="text-black">Home</Link> / <span className="text-black">Wishlist</span>
</div>

        {/* Wishlist Box */}
        <div className="w-full shadow border border-gray-200 rounded-lg overflow-hidden">
          {/* Header (Desktop) */}
          <div className="hidden md:grid grid-cols-6 gap-4 bg-[#04675C] text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide">
            <div className="col-span-3">Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Total</div>
          </div>

          {/* Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="border-t border-gray-100 px-4 py-6 md:grid md:grid-cols-6 md:gap-4 text-sm flex flex-col gap-3"
            >
              {/* Product Info */}
              <div className="md:col-span-3 flex items-center gap-4">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-gray-400 text-xl"
                >
                  <FiTrash2 />
                </button>
                <img
                  src={wishlisti}
                  alt={item.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="text-gray-800 font-medium">{item.name}</div>
              </div>

              {/* Mobile View: Price */}
              <div className="md:hidden flex justify-between mr-[50px] text-gray-600">
                <span className="ml-[90px]">Price</span>
                <span>${item.price}</span>
              </div>

              {/* Quantity */}
              <div className="md:col-span-1 flex items-center justify-between  md:justify-center">
                <span className="md:hidden ml-[90px] text-gray-600">Qty</span>
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-1 gap-4">
                  <button
                    onClick={() => handleQtyChange(item.id, -1)}
                    className="text-gray-600 hover:text-black"
                  >
                    −
                  </button>
                  <span className="font-medium">{item.qty}</span>
                  <button
                    onClick={() => handleQtyChange(item.id, 1)}
                    className="text-gray-600 hover:text-black"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mobile View: Total */}
              <div className="md:hidden flex justify-between mr-[50px] text-gray-600">
                <span className="ml-[90px]">Total</span>
                <span>${item.price * item.qty}</span>
              </div>

              {/* Desktop View: Price */}
              <div className="hidden md:flex justify-center items-center text-gray-700">
                ${item.price}
              </div>

              {/* Desktop View: Total */}
              <div className="hidden md:flex justify-center items-center text-gray-800 font-semibold">
                ${item.price * item.qty}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="w-full text-center">
          <Link to="/Cart">
            <button className="bg-[#04675C] text-white px-10 py-3 rounded-full hover:bg-[#03564e] transition font-medium">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
