import React, { useState, useRef } from "react";
import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import singlepro from "../Image/singlepro.svg";
import singlepro2 from "../Image/singlepro2.svg";
import singlepro3 from "../Image/singlepro3.svg";
import { Link } from "react-router-dom";
import Producttab from "../components/Producttab";

const ProductDetail = () => {
  const thumbnails = [singlepro, singlepro2, singlepro3];
  const [selectedImage, setSelectedImage] = useState(singlepro2);
  const [color, setColor] = useState("#FBCACA");
  const [purity, setPurity] = useState("14KT");
  const [size, setSize] = useState("23");
  const [quantity, setQuantity] = useState(1);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isMobileZoomOpen, setIsMobileZoomOpen] = useState(false);
  const imageRef = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPosition({ x, y });
  };

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
      name: "Zara Royal Jewel",
      oldPrice: "$220.00",
      newPrice: "$190.00",
      discount: "-14%",
      image: singlepro3,
    },
    {
      id: 3,
      name: "Bella Grace Design",
      oldPrice: "$240.00",
      newPrice: "$210.00",
      discount: "-12%",
      image: singlepro3,
    },
    {
      id: 4,
      name: "Evelyn Gold Twist",
      oldPrice: "$210.00",
      newPrice: "$180.00",
      discount: "-15%",
      image: singlepro3,
    },
  ];
  

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="grid md:grid-cols-2 gap-10 relative">
        {/* Image Section with Thumbnails Below */}
        <div className="relative w-full">
          {/* Main Image */}
          {/* Image Section with Thumbnails Below */}
          <div className="relative w-full">
            {/* Main Image */}
            <div
              className="relative"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
              onClick={() => {
                if (window.innerWidth <= 768) setIsMobileZoomOpen(true);
              }}
            >
              <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                <img
                  ref={imageRef}
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto rounded-md object-cover aspect-[4/3]"
                />
              </div>

              {isZooming && (
                <div
                  className="hidden md:block absolute top-0 left-[105%] w-96 h-96 border border-gray-200 rounded-lg overflow-hidden z-30"
                  style={{
                    backgroundImage: `url(${selectedImage})`,
                    backgroundSize: "200%",
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                ></div>
              )}
            </div>

            {/* Thumbnails Below */}
            <div className="flex gap-3 mt-4 justify-center">
              {thumbnails.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition ${
                    selectedImage === img
                      ? "border-[#00715D]"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      
        {/* Product Info */}
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold text-gray-800">
              Amrita Antique Designer
            </h2>
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
            Timeless elegance in antique design. Ideal for gifting or special
            occasions.
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
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg px-2 text-gray-600"
              >
                <FiMinus />
              </button>
              <span className="px-2 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg px-2 text-gray-600"
              >
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
                className="w-4 h-4"
              />
              <span>Free worldwide shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
                className="w-4 h-4"
              />
              <span>
                Delivery in 3–7 Days –{" "}
                <span className="underline cursor-pointer">
                  Shipping & Returns
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Producttab/>

      {/* Similar Products */}
      <div className="mt-14 mb-10">
  <h3 className="text-xl font-semibold text-[#00715D] mb-6">
    Similar Products
  </h3>
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {similarProducts.map((product) => (
      <div key={product.id} className="group">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex items-start justify-between mt-3">
          <div>
            <h3 className="line-clamp-1 text-base font-medium text-slate-800">
              {product.name}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-sm">
              <span className="line-through text-slate-400">
                {product.oldPrice}
              </span>
              <span className="text-slate-800 font-semibold">
                {product.newPrice}
              </span>
            </div>
          </div>
          <Link to="/Allproduct">
            <button className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition">
              <FiPlus size={12} />
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Mobile Zoom Overlay */}
      {isMobileZoomOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <img                                
            src={selectedImage}
            alt="Zoomed"
            className="w-full h-auto max-w-[90%] max-h-[90%] object-contain"
          />
          <button
            onClick={() => setIsMobileZoomOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
