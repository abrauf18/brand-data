import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TooltipHero } from "./TooltipHero";
const CircularProgress = ({ percentage, color }) => {
  const size = 80;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (percentage * circumference) / 100;

  return (
    <div className="!relative !inline-flex !items-center !justify-center">
      <svg width={size} height={size} className="!transform !-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - dash}
          strokeLinecap="round"
        />
      </svg>
      <div className="!absolute !text-xl !font-bold" style={{ color }}>
        {percentage}%
      </div>
    </div>
  );
};

const Donut = ({ per, total, listingCount, brand }) => {
  const tooltipContent = {
    "Walmart In-Stock":
      "Displaying the number of items that have Walmart.com as a seller",
    "WFS In-Stock":
      "Displaying the number of items that have one or more WFS sellers on the listing",
    "Pro Sellers In-Stock":
      "Displaying the number of items that have one or more Pro sellers on the listing",
  };

  // Define seller types for each card
  const sellerTypes = {
    "Walmart In-Stock": "Walmart",
    "WFS In-Stock": "Marketplace+Sellers+fulfilled+by+Walmart",
    "Pro Sellers In-Stock": "Pro+Sellers",
  };

  // Generate URL for each seller type
  const generateWalmartUrl = (brandName, sellerType) => {
    const encodedBrand = encodeURIComponent(brandName);
    return `https://www.walmart.com/search?q=${encodedBrand}&facet=brand:${encodedBrand}||retailer_type:${sellerType}&sort=best_seller`;
  };

  const listingData = [
    {
      id: 1,
      name: "Walmart In-Stock",
      listings: listingCount?.walmartInStock,
      totalListings: total,
      percentage: parseFloat(per?.walmartInStock),
      color: "#3b82f6",
      bgColor: "!bg-blue-50",
      borderColor: "!border-blue-100",
    },
    {
      id: 2,
      name: "WFS In-Stock",
      listings: listingCount.marketplaceSellersFulfilledByWalmart,
      totalListings: total,
      percentage: parseFloat(per?.marketplaceSellersFulfilledByWalmart),
      color: "#f97316",
      bgColor: "!bg-orange-50",
      borderColor: "!border-orange-100",
    },
    {
      id: 3,
      name: "Pro Sellers In-Stock",
      listings: listingCount.proSellers,
      totalListings: total,
      percentage: parseFloat(per?.proSellers),
      color: "#eab308",
      bgColor: "!bg-yellow-50",
      borderColor: "!border-yellow-100",
    },
  ];

  return (
    <div className="!w-full">
      <h3 className="!text-base !font-semibold !mb-6">Brand Listing Data</h3>

      <div className="!grid !grid-cols-1 !gap-6">
        {listingData.map((item) => (
          <div
            key={item.id}
            className={`!border !rounded-lg !shadow-sm !overflow-hidden ${item.borderColor}`}
          >
            <div className={`!p-6 ${item.bgColor}`}>
              <div className="!flex !flex-col !items-center md:!flex-row md:!items-start !gap-4">
                <CircularProgress
                  percentage={item.percentage}
                  color={item.color}
                />
                <div className="!flex !flex-col">
                  <div className=" !font-medium !text-gray-800 !text-center sm:!text-start">
                    {item.listings}{" "}
                    <span className="!text-gray-600 !font-normal">
                      /{item.totalListings} Listings
                    </span>
                  </div>
                  <div className="!text-sm !text-gray-600 !mt-1 !flex !items-center">
                    <div className="!flex !flex-col !justify-center !pr-1 ">
                      {item.name}
                    </div>
                    <TooltipHero content={tooltipContent[item.name]} />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider line */}
            <div className="!w-full !h-px !bg-gray-200"></div>

            {/* View more section */}
            <div className="!p-4 !bg-white !flex !justify-end ">
              <a
                href={generateWalmartUrl(brand, sellerTypes[item.name])}
                target="_blank"
                rel="noopener noreferrer"
                className="!text-blue-500 !text-sm !font-medium !flex !items-center hover:!text-blue-700 !transition-colors"
              >
                View more
                <FaArrowRightLong className="!mt-1 !ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donut;
