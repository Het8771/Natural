import React, { useState } from "react";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const similarProducts = [
  {
    id: 1,
    name: "Gold Diamond Ring",
    oldPrice: "₹2000",
    newPrice: "₹1500",
    discount: "-25%",
    image:
      "https://images.pexels.com/photos/10975658/pexels-photo-10975658.jpeg",
  },
  {
    id: 2,
    name: "Stylish Platinum Ring",
    oldPrice: "₹3000",
    newPrice: "₹2500",
    discount: "-17%",
    image:
      "https://images.pexels.com/photos/10824635/pexels-photo-10824635.jpeg",
  },
  {
    id: 3,
    name: "Engagement Ring",
    oldPrice: "₹1800",
    newPrice: "₹1600",
    discount: "-11%",
    image:
      "https://images.pexels.com/photos/11023446/pexels-photo-11023446.jpeg",
  },
  {
    id: 4,
    name: "Classic Couple Ring",
    oldPrice: "₹2200",
    newPrice: "₹1900",
    discount: "-14%",
    image:
      "https://images.pexels.com/photos/10590302/pexels-photo-10590302.jpeg",
  },
];

const SimilarProducts = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleActions = (id) => {
    if (window.innerWidth <= 768) {
      setVisibleProductId((prevId) => (prevId === id ? null : id));
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5">
      {similarProducts.map((product) => {
        const showActions = visibleProductId === product.id;

        return (
          <div
            key={product.id}
            onClick={() => toggleActions(product.id)}
            className="group border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition relative cursor-pointer"
          >
            <div className="relative aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-[#00715D] text-white text-xs px-2 py-0.5 rounded-sm">
                  {product.discount}
                </div>
              )}

              {/* Action icons */}
              <div
                className={`absolute top-2 right-2 flex flex-col gap-2 ${
                  showActions ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                } transition-all duration-300`}
              >
                <button className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100">
                  <FiEye size={16} />
                </button>
                <button className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100">
                  <FiHeart size={16} />
                </button>
              </div>

              {/* Add to cart bar */}
              <Link to="/Cart">
                <div
                  className={`absolute bottom-0 w-full bg-[#00715D] text-white text-center py-2 text-sm font-medium ${
                    showActions
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } transition-all duration-300`}
                >
                  <FiShoppingCart className="inline-block mr-2" />
                  Add to Cart
                </div>
              </Link>
            </div>

            {/* Product info */}
            <div className="px-3 py-2">
              <h3 className="text-base font-medium text-slate-800 line-clamp-1">
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
          </div>
        );
      })}
    </div>
  );
};

export default SimilarProducts;
