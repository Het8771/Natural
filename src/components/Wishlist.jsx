import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import wishlisti from "../Image/wishlisti.svg";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 2, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 3, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 4, name: "Amrita Antique Designer", price: 180, qty: 1 },
  ]);

  const handleQtyChange = (id, delta) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="px-4 py-7 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl bg-white shadow rounded-md overflow-hidden">
        {/* Header (Desktop Only) */}
        <div className="hidden sm:grid grid-cols-6 gap-4 bg-[#04675C] text-white px-6 py-3 font-medium text-sm">
          <div className="col-span-3">Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Total</div>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className="border-t border-gray-300 px-4 py-6 grid grid-cols-1 sm:grid-cols-6 gap-4 text-sm items-center"
          >
            {/* Product Info */}
            <div className="sm:col-span-3 flex items-center gap-3">
              <button
                onClick={() => handleRemove(item.id)}
                className="text-gray-500 hover:text-red-600"
              >
                <FiTrash2 />
              </button>
              <img
                src={wishlisti}
                alt="Product"
                className="w-12 h-12 object-cover rounded"
              />
              <span className="text-gray-800 font-medium">{item.name}</span>
            </div>

            {/* Mobile Price */}
            <div className="sm:hidden flex justify-between text-gray-600">
              <span>Price</span>
              <span>${item.price}</span>
            </div>

            {/* Quantity Controls */}
            <div className="flex justify-between sm:justify-center sm:col-span-1 items-center">
              <span className="sm:hidden text-gray-600">Qty</span>
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-1 gap-4 mx-2 sm:mx-0">
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

            {/* Mobile Total */}
            <div className="sm:hidden flex justify-between text-gray-600">
              <span>Total</span>
              <span>${item.qty * item.price}</span>
            </div>

            {/* Desktop Price & Total */}
            <div className="hidden sm:block text-center text-gray-700">${item.price}</div>
            <div className="hidden sm:block text-center text-gray-700 font-semibold">
              ${item.qty * item.price}
            </div>
          </div>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div className="mt-6">
        <Link to="/Cart">
          <button className="bg-[#04675C] text-white px-8 py-3 rounded-full hover:bg-[#03564e] transition font-medium cursor-pointer">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
