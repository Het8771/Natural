import React, { useState } from "react";
import { Link } from "react-router-dom";


const CheckoutTabs = () => {
  const [step, setStep] = useState("Personal");

  return (
    <div className="max-w-7xl mx-auto">
         <div className="text-md text-gray-500 mb-4 ml-17">
  <Link to="/" className="text-black">Home</Link> / <span className="text-black">Checkout</span>
</div>
    <div className="min-h-screen bg-white p-4 md:p-10 flex flex-col md:flex-row gap-6 justify-center items-start">
      
    
      {/* Left: Form Tabs */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md w-full md:w-[65%]">
        {/* Tabs */}
        <div className="flex w-full overflow-hidden mb-6">
          {['Personal'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setStep(tab)}
              className={`flex-1 py-4 text-md text-white transition cursor-pointer ${
                step === tab ? 'bg-[#00685E]' : 'bg-[#2F9C90] opacity-80'
              } ${index === 0 ? 'rounded-tl-lg rounded-tr-lg' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Personal Info Form */}
        {step === "Personal" && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm px-3">
            <div className="flex flex-col">
              <label className="text-[#04675C] text-sm mb-1">First Name*</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <div className="flex flex-col">
              <label className="text-[#04675C] text-sm mb-1">Last Name*</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <div className="flex flex-col">
              <label className="text-[#04675C] text-sm mb-1">Email Address*</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <div className="flex flex-col">
              <label className="text-[#04675C] text-sm mb-1">Phone Number*</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#04675C] text-sm mb-1">Street Address*</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#04675C] text-sm mb-1">Town / City*</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#04675C] text-sm mb-1">Country*</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#04675C] text-sm mb-1">Postcode / Zip*</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#04675C]" />
            </div>
            <button
              type="button"
              className="md:col-span-2 mt-4 mb-3 w-[190px] bg-[#00685E] text-white py-3 px-5 rounded-full hover:bg-[#03564e] text-sm cursor-pointer"
            >
              Proceed to Next Step
            </button>
          </form>
        )}
      </div>
      

      {/* Right: Cart Summary */}
      <div className="w-full md:w-[30%] bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#04675C] text-white text-center py-4 font-semibold">
          Cart Details
        </div>
        <div className="p-5 text-sm bg-gray-50">
          <div className="grid grid-cols-3 font-semibold border-b border-dashed border-gray-300 pb-6 text-[#00685E]">
            <span>PRODUCT</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">SUBTOTAL</span>
          </div>
          {[180, 120, 100].map((price, idx) => (
            <div key={idx} className="grid grid-cols-3 py-3 items-center text-gray-400">
              <span className="flex items-center gap-2">
                <img
                  src="https://images.pexels.com/photos/4672719/pexels-photo-4672719.jpeg"
                  alt="product"
                  className="w-8 h-8 object-cover rounded-md"
                />
                Amrita
              </span>
              <span className="text-center">01</span>
              <span className="text-right">${price}</span>
            </div>
          ))}
          <div className="py-4 mt-2 border-t border-dashed border-gray-400">
            <div className="flex justify-between">
              <span className="text-[#00685E]">SUBTOTAL</span>
              <span className="font-medium text-gray-400">$400</span>
            </div>
          </div>
          <div className="py-2 border-t border-dashed border-gray-400"></div>
          <div className="flex justify-between mb-4">
            <span className="text-[#00685E]">SHIPPING</span>
            <span className="font-medium text-gray-400">$100</span>
          </div>
          <div className="py-2 border-t border-dashed border-gray-400"></div>
          <div className="flex justify-between text-lg">
            <span className="text-[#00685E]">Total</span>
            <span className="text-gray-400">$500</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CheckoutTabs;
