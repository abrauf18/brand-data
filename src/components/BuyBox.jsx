import React from "react";
import { TooltipHero } from "./TooltipHero";

export default function BuyBox({ fulfillmentTypePercent }) {
  // Default values if props are not provided
  const defaultData = {
    wfs: "0.0",
    mfn: "0.0",
    wmt: "0.0",
    oos: "0.0",
  };

  // Merge provided data with defaults
  const data = { ...defaultData, ...fulfillmentTypePercent };

  // Convert string percentages to numbers
  const wfs = parseFloat(data.wfs || "0.0");
  const mfn = parseFloat(data.mfn || "0.0");
  const wmt = parseFloat(data.wmt || "0.0");
  const oos = parseFloat(data.oos || "0.0");

  // Data for the progress bar segments
  const segments = [
    { name: "WFS", percentage: wfs, color: "#2563EB" },
    { name: "MFN", percentage: mfn, color: "#6B7280" },
    { name: "WMT", percentage: wmt, color: "#EF4444" },
    { name: "OOS", percentage: oos, color: "#E5E7EB" },
  ];

  // Calculate total for normalization
  const total = segments.reduce((sum, segment) => sum + segment.percentage, 0);

  // Tooltip content (was originally "Data is based on the top 40 best-selling items")
  const tooltipContent = (
    <div className="!text-sm !text-black !font-medium">
      Data is based on the top 40 best-selling items
    </div>
  );

  return (
    <div className="!p-2 !bg-white !rounded-xl !shadow-sm !border !border-gray-100">
      <div className="!flex !items-center !justify-between !mb-6">
        <div className="!flex !items-center !gap-2">
          <h3 className="!text-base !font-semibold !text-gray-800">
            BuyBox Composition
          </h3>
          {/* Replace old tooltip with TooltipHero */}
          <div className="!relative !inline-block">
            <TooltipHero content={tooltipContent} />
          </div>
        </div>
      </div>

      {/* Custom Progress Bar */}
      <div className="!w-full !h-4 !rounded-full !overflow-hidden !flex !mb-6">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="!h-full !transition-all !duration-500 !ease-in-out"
            style={{
              width: `${total > 0 ? (segment.percentage / total) * 100 : 0}%`,
              backgroundColor: segment.color,
            }}
          />
        ))}
      </div>

      {/* Percentage Indicators */}
      <div className="!grid !grid-cols-4 !gap-4">
        {segments.map((segment, index) => (
          <div key={index} className="!flex !flex-col">
            <span className="!text-sm !font-bold !text-gray-800">
              {segment.percentage.toFixed(1)}%
            </span>
            <div className="!flex !items-center !gap-2 !mt-1">
              <div
                className="!w-4 !h-4 !rounded-sm"
                style={{ backgroundColor: segment.color }}
              />
              <span className="!text-sm !font-medium !text-gray-600">
                {segment.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
