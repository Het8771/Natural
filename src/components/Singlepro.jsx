import React, { useState } from "react";
import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import singlepro from "../Image/singlepro.svg";
import singlepro2 from "../Image/singlepro2.svg";
import singlepro3 from "../Image/singlepro3.svg";

const ProductDetail = () => {
  const thumbnails = [singlepro, singlepro2, singlepro3];
  const [selectedImage, setSelectedImage] = useState(singlepro2);
  const [color, setColor] = useState("#FBCACA");
  const [purity, setPurity] = useState("14KT");
  const [size, setSize] = useState("23");
  const [quantity, setQuantity] = useState(1);

  const similarProducts = [
    {
      id: 1,
      name: "Amrita Antique Designer",
      oldPrice: "$230.00",
      newPrice: "$200.00",
      discount: "-13%",
      image: singlepro3,
    },
    {
      id: 2,
      name: "Amrita Antique Designer",
      oldPrice: "$230.00",
      newPrice: "$200.00",
      discount: "-13%",
      image: singlepro3,
    },
    {
      id: 3,
      name: "Amrita Antique Designer",
      oldPrice: "$230.00",
      newPrice: "$200.00",
      discount: "-13%",
      image: singlepro3,
    },
    {
      id: 4,
      name: "Amrita Antique Designer",
      oldPrice: "$230.00",
      newPrice: "$200.00",
      discount: "-13%",
      image: singlepro3,
    },
  ];

  return (
    <div className="min-h-screen mx-auto px-4 py-10">
      {/* Product Detail */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {thumbnails.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded border cursor-pointer ${
                  selectedImage === img ? "border-[#00715D]" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="flex-1">
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Info Section */}
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold text-gray-800">Amrita Antique Designer</h2>
            <FiHeart className="text-gray-500 text-xl cursor-pointer" />
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-2xl font-bold text-black">$200.00</span>
            <div className="flex items-center text-green-600 text-sm gap-1">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} size={18} />
              ))}
              <span className="text-gray-500 ml-1">(32 reviews)</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            Timeless elegance in antique design. Ideal for gifting or special occasions.
          </p>

          {/* Color Picker */}
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">COLOR</h4>
            <div className="flex gap-3">
              {["#FBCACA", "#D1D1D1", "#F6C94C"].map((clr) => (
                <button
                  key={clr}
                  onClick={() => setColor(clr)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    color === clr ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: clr }}
                ></button>
              ))}
            </div>
          </div>

          {/* Purity */}
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">PURITY</h4>
            <div className="flex gap-3">
              {["14KT", "18KT"].map((kt) => (
                <button
                  key={kt}
                  onClick={() => setPurity(kt)}
                  className={`px-4 py-1 rounded-full border text-sm ${
                    purity === kt ? "border-black" : "border-gray-400"
                  }`}
                >
                  {kt}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">SIZE</h4>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="border px-4 py-1 rounded-full text-sm"
            >
              <option value="23">23 (20.0 mm)</option>
              <option value="25">25 (22.0 mm)</option>
              <option value="27">27 (24.0 mm)</option>
            </select>
          </div>

          {/* Quantity + Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded-full px-4 py-1">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-lg px-2 text-gray-600">
                <FiMinus />
              </button>
              <span className="px-2 text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-lg px-2 text-gray-600">
                <FiPlus />
              </button>
            </div>
            <button className="flex-1 bg-[#00715D] text-white py-3 rounded-full hover:bg-[#005F4D] transition">
              Add to Cart
            </button>
          </div>

          <button className="w-full mt-4 border-2 border-[#00715D] text-[#00715D] py-3 rounded-full hover:bg-[#F0FFF8] transition">
            Buy Now
          </button>

          {/* Shipping Info */}
          <div className="mt-6 text-sm text-gray-600 space-y-2">
            <div className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/891/891419.png" className="w-4 h-4" />
              <span>Free worldwide shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" className="w-4 h-4" />
              <span>
                Delivery in 3–7 Days –{" "}
                <span className="underline cursor-pointer">Shipping & Returns</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold text-[#00715D] mb-6">Similar Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl transition p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <h4 className="text-base font-medium text-gray-700 mb-2">{product.name}</h4>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
                  <span className="text-sm font-semibold text-black">{product.newPrice}</span>
                </div>
                <button className="w-7 h-7 border border-gray-400 rounded-full text-sm font-bold hover:bg-[#00715D] hover:text-white transition">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
