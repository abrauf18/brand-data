import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

// Import your TooltipHero component
import { TooltipHero } from "./TooltipHero";

// Enhanced Circular Progress Component
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

export default function BrandListingData() {
  const tooltipContent = {
    "Walmart In-Stock":
      "Displaying the number of items that have Walmart.com as a seller",
    "WFS In-Stock":
      "Displaying the number of items that have one or more WFS sellers on the listing",
    "Pro Sellers In-Stock":
      "Displaying the number of items that have one or more Pro sellers on the listing",
  };

  const listingData = [
    {
      id: 1,
      name: "Walmart In-Stock",
      listings: 144,
      totalListings: 672,
      percentage: 25,
      color: "#3b82f6",
      bgColor: "!bg-blue-50",
      borderColor: "!border-blue-100",
    },
    {
      id: 2,
      name: "WFS In-Stock",
      listings: 120,
      totalListings: 672,
      percentage: 18,
      color: "#f97316",
      bgColor: "!bg-orange-50",
      borderColor: "!border-orange-100",
    },
    {
      id: 3,
      name: "Pro Sellers In-Stock",
      listings: 120,
      totalListings: 672,
      percentage: 30,
      color: "#eab308",
      bgColor: "!bg-yellow-50",
      borderColor: "!border-yellow-100",
    },
  ];

  return (
    <div className="!w-full">
      <h3 className="!text-2xl !font-semibold !mb-6">Brand Listing Data</h3>

      <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-6">
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
                  <div className="!font-bold !text-lg !text-gray-800">
                    {item.listings}{" "}
                    <span className="!text-gray-600 !font-normal">
                      /{item.totalListings} Listings
                    </span>
                  </div>
                  <div className="!text-md !text-gray-600 !mt-1 !flex !items-center">
                    <div className="!flex !flex-col !justify-center !pr-1">
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
            <div className="!p-4 !bg-white !flex !justify-end">
              <button className="!text-blue-500 !text-sm !font-medium !flex !items-center hover:!text-blue-700 !transition-colors">
                View more
                <FaArrowRightLong className="!mt-1 !ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
