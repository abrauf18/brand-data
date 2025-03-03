import React, { useState } from "react";

const Retailer = ({ listingCount }) => {
  const [isOpen, setIsOpen] = useState(true);

  const marketplaceSellersFulfilledByWalmart =
    listingCount?.marketplaceSellersFulfilledByWalmart || 0;
  const proSellers = listingCount?.proSellers || 0;
  const walmartInStock = listingCount?.walmartInStock || 0;

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  // Use the data from props
  const retailers = [
    { name: "Walmart", count: walmartInStock },
    { name: "Pro Sellers", count: proSellers },
    {
      name: "Marketplace Sellers fulfilled by Walmart",
      count: marketplaceSellersFulfilledByWalmart,
    },
  ];

  return (
    <div className="!p-6 !bg-white !rounded-xl !shadow-sm !border !border-gray-100">
      <div className="!flex !justify-between !items-center !mb-4">
        <h2 className="!text-2xl !font-semibold !text-gray-800">Retailer</h2>
        <button onClick={toggleSection}>
          <svg
            className={`!w-6 !h-6 !transform !transition-transform ${
              isOpen ? "!rotate-180" : "!rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div>
          {retailers.map((retailer, index) => (
            <div
              key={index}
              className="!flex !items-center !justify-between !py-3 !border-b !border-gray-200"
            >
              <div className="!flex !items-center !space-x-3">
                <input
                  type="checkbox"
                  id={`retailer-${index}`}
                  className="!w-5 !h-5 !text-blue-600 !border-gray-300 !rounded focus:!ring-blue-500"
                />
                <label
                  htmlFor={`retailer-${index}`}
                  className="!text-base !font-medium !text-gray-700"
                >
                  {retailer.name}
                </label>
              </div>
              <span className="!text-base !text-gray-600">
                {retailer.count}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Retailer;
