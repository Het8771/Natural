import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiTrash2 } from "react-icons/fi"; // Updated icon import
import cart from "../image/cart.svg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 2, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 3, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 4, name: "Amrita Antique Designer", price: 180, qty: 1 },
  ]);

  const handleQtyChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const total = subtotal;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
         <div className="text-sm text-gray-500 mb-4">
  <Link to="/" className="text-black">Home</Link> / <span className="text-black">Cart</span>
</div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Cart Table */}
        <div className="lg:col-span-2 w-full bg-white rounded-md shadow overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden sm:grid grid-cols-6 gap-4 bg-[#04675C] text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide">
            <div className="col-span-3">Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Total</div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-t border-gray-200 px-4 py-6 text-sm grid grid-cols-1 sm:grid-cols-6 gap-4 items-center"
            >
              {/* Product Info */}
              <div className="sm:col-span-3 flex items-center gap-4">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-gray-400 text-xl font-bold"
                >
                  <FiTrash2 size={18} />
                </button>
                <img
                  src={cart}
                  alt={item.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <span className="text-gray-800 font-medium">{item.name}</span>
              </div>

              {/* Mobile Price Row */}
              <div className="md:hidden flex justify-between mr-[50px] text-gray-600">
                <span className="ml-[90px]">Price</span>
                <span>${item.price.toFixed(2)}</span>
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

              {/* Mobile Total Row */}
              <div className="md:hidden flex justify-between mr-[50px] text-gray-600">
                <span className="ml-[90px]">Total</span>
                <span>${(item.qty * item.price).toFixed(2)}</span>
              </div>

              {/* Desktop Price */}
              <div className="hidden sm:block text-center text-gray-700">
                ${item.price.toFixed(2)}
              </div>

              {/* Desktop Total */}
              <div className="hidden sm:block text-center text-gray-800 font-semibold">
                ${(item.qty * item.price).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-md shadow-md overflow-hidden w-full h-fit">
          <div className="bg-[#04675C] text-white font-semibold px-6 py-3">
            Cart Total
          </div>
          <div className="p-6 space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="text-[#04675C] font-semibold">SUBTOTAL</span>
              <span className="text-gray-700">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="text-[#04675C] font-semibold">DISCOUNT</span>
              <span className="text-gray-700">---</span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <span className="text-[#04675C]">TOTAL</span>
              <span className="text-gray-800">${total.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/Checkout">
            <div className="bg-[#04675C] text-white text-center py-3 font-semibold cursor-pointer hover:bg-[#03564e] transition">
              Proceed To Checkout
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
