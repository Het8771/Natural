import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "DESCRIPTION" },
    { id: "shipping", label: "SHIPPING & RETURN" },
    { id: "care", label: "JEWELLERY CARE" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm">
              <li>Base Material: Copper based Alloy</li>
              <li>Plating: Gold</li>
              <li>Stone: Kundan, Imitation Stones</li>
              <li>Finish: Embellished</li>
              <li>In the Box: Mathapatti</li>
            </ul>
          </div>
        );
      case "shipping":
        return (
          <div className="mt-6 text-sm text-gray-800 space-y-2">
            <p>Free shipping on orders over ₹1000.</p>
            <p>Return window: 7 days from delivery.</p>
          </div>
        );
      case "care":
        return (
          <div className="mt-6 text-sm text-gray-800 space-y-2">
            <p>Store in a dry place. Avoid contact with water & perfume.</p>
            <p>Clean with soft dry cloth only.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-10 max-w-4xl mx-auto px-4">
      {/* Tab Buttons */}
      <div className="flex overflow-x-auto gap-4 sm:gap-6 border-b border-gray-200 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`pb-3 text-sm sm:text-base font-semibold whitespace-nowrap uppercase border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
