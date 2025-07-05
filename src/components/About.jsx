import React, { useState } from "react";
import about1 from "../Image/about1.svg"; 
import about2 from "../Image/about2.svg"; 

const ProductGallery = () => {
  const images = [about2,about2,about2,about2];
  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="px-4 py-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: Main Image */}
      <div className="col-span-1">
        <img
          src={about1}
          alt="Main"
          className="w-full h-full rounded-xl shadow object-cover"
        />
      </div>

      {/* Right: Thumbnails and Description */}
      <div className="col-span-2 space-y-6">
        {/* Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={about2}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setSelectedImg(img)}
              className={`cursor-pointer rounded-lg border-2 ${
                selectedImg === img ? "border-[#00715D]" : "border-transparent"
              } hover:border-[#00715D] transition`}
            />
          ))}
        </div>

        {/* Description (Optional) */}
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Elevate your elegance with the Mabel Butterfly Ring, featuring a bold green stone and delicate butterfly accents. A perfect blend of nature-inspired charm and timeless luxury.
          </p>
          <p>
            Ideal for special occasions or everyday glamour, this ring makes a sophisticated statement of grace and beauty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
