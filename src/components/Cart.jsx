import React, { useState } from "react";
import cart from "../Image/cart.svg";
import { Link } from "react-router-dom";

const CheckoutTabs = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 2, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 3, name: "Amrita Antique Designer", price: 180, qty: 1 },
    { id: 4, name: "Amrita Antique Designer", price: 180, qty: 1 },
  ]);

  const handleQtyChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="px-4 py-6 bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Cart Items Table */}
        <div className="lg:col-span-2 bg-white rounded-md shadow overflow-hidden w-full">
          <div className="bg-[#04675C] text-white font-semibold px-4 py-3 hidden sm:grid grid-cols-6 text-sm">
            <div className="col-span-3">Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Total</div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-6 items-center gap-4 px-4 py-4 border-t border-gray-300 text-sm"
            >
              <div className="sm:col-span-3 flex items-center gap-3">
                <button className="text-[#04675C] text-xl">×</button>
                <img src={cart} alt="product" className="w-12 h-12 object-cover rounded" />
                <span className="text-gray-700">{item.name}</span>
              </div>
              <div className="text-center">${item.price.toFixed(2)}</div>
              <div className="flex justify-center items-center gap-2 border px-4 py-1 rounded-full w-fit mx-auto">
                <button
                  className="text-gray-600 hover:text-black"
                  onClick={() => handleQtyChange(item.id, -1)}
                >
                  −
                </button>
                <span className="w-6 text-center font-medium">{item.qty}</span>
                <button
                  className="text-gray-600 hover:text-black"
                  onClick={() => handleQtyChange(item.id, 1)}
                >
                  ＋
                </button>
              </div>
              <div className="text-center">${(item.price * item.qty).toFixed(2)}</div>
            </div>
          ))}
        </div>

        {/* Cart Total Summary */}
        <div className="bg-white rounded-md shadow-md overflow-hidden w-full h-fit">
          <div className="bg-[#04675C] text-white font-semibold px-6 py-3">
            Cart Total
          </div>
          <div className="p-6 space-y-4 text-sm">
            <div className="flex justify-between  border-b border-gray-300 pb-2">
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

export default CheckoutTabs;
