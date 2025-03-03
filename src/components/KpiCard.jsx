import React from "react";
import { FaUserLock } from "react-icons/fa";
import { TooltipHero } from "./TooltipHero";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function KpiCard({ ipMetrics }) {
  const data = [
    {
      name: "Unique Offers on BuyBox",
      text: ipMetrics.uniqueOffersOnBB.text,
      value: ipMetrics.uniqueOffersOnBB.bars,
      color: ipMetrics.uniqueOffersOnBB.color,
      tooltip: (
        <div className="p-4 text-sm">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
            <span className="font-medium">High - 5+ unique offers</span>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
            <span className="font-medium">Medium - 3-4 unique offers</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
            <span className="font-medium">Low - 2 or fewer unique offers</span>
          </div>
        </div>
      ),
    },
    {
      name: "Brand on Listings",
      text: ipMetrics.brandOnListing.text,
      value: ipMetrics.brandOnListing.bars,
      color: ipMetrics.brandOnListing.color,
      tooltip: (
        <div className="p-4 text-sm">
          <div className="flex items-start mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3 mt-1"></div>
            <div>
              <span className="font-bold">No Match</span>
              <span> - High confidence Brand is not selling on listing</span>
            </div>
          </div>
          <div className="flex items-start mb-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3 mt-1"></div>
            <div>
              <span className="font-bold">Possible Match</span>
              <span> - Caution, Brand may be selling on listings</span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-3 mt-1"></div>
            <div>
              <span className="font-bold">Match Detected</span>
              <span> - High confidence Brand is selling on listing</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Offers on Listings",
      text: ipMetrics.offersOnListing.text,
      value: ipMetrics.offersOnListing.bars,
      color: ipMetrics.offersOnListing.color,
      tooltip: (
        <div className="p-4 text-sm">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
            <span className="font-medium">Green - 5+ sellers</span>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
            <span className="font-medium">Yellow - 3-4 sellers</span>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
            <span className="font-medium">Red - 2 or fewer sellers</span>
          </div>
          <div className="mt-1 text-gray-400">
            Observed on one or more listings
          </div>
        </div>
      ),
    },
  ];

  const ipRatingTooltip = (
    <div className="!p-0">
      <div className="!bg-gray-50 !p-3 !border-b !border-gray-200 !font-medium !text-gray-800 !rounded-t-md">
        IP Rating Information
      </div>
      <div className="!p-4">
        <p className="!text-sm !text-gray-700 !mb-3 !font-medium">
          Indicates the likelihood of gating or restriction enforcement by this
          brand.
        </p>
        <div className="!space-y-3">
          <div className="!flex !items-center !py-1 !px-2 !rounded-md !bg-green-50">
            <div className="!w-4 !h-4 !rounded-full !bg-green-500 !mr-3 !flex-shrink-0"></div>
            <span className="!text-sm !text-gray-800">
              <span className="!font-medium">Low Risk</span> – Little to no
              enforcement observed
            </span>
          </div>
          <div className="!flex !items-center !py-1 !px-2 !rounded-md !bg-yellow-50">
            <div className="!w-4 !h-4 !rounded-full !bg-yellow-500 !mr-3 !flex-shrink-0"></div>
            <span className="!text-sm !text-gray-800">
              <span className="!font-medium">Medium Risk</span> – Brand may
              enforce restrictions
            </span>
          </div>
          <div className="!flex !items-center !py-1 !px-2 !rounded-md !bg-red-50">
            <div className="!w-4 !h-4 !rounded-full !bg-red-500 !mr-3 !flex-shrink-0"></div>
            <span className="!text-sm !text-gray-800">
              <span className="!font-medium">High Risk</span> – Brand has a
              higher chance of enforcing restrictions
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const reportBrandTooltip = (
    <div className="!p-0">
      <div className="!bg-gray-50 !p-3 !border-b !border-gray-200 !font-medium !text-gray-800 !rounded-t-md">
        Brand Reporting
      </div>
      <div className="!p-4">
        <div className="!bg-blue-50 !border-l-4 !border-blue-400 !p-3 !mb-3 !rounded">
          <p className="!text-sm !text-gray-800 !leading-relaxed">
            This number reflects the number of users who have reported this
            brand as gated or restricted. It does not affect the overall IP
            Rating. Click the text or icon to report a brand.
          </p>
        </div>
      </div>
    </div>
  );

  const getColorClass = (colorName, isBackground = false) => {
    const prefix = isBackground ? "bg-" : "text-";
    switch (colorName) {
      case "green":
        return `${prefix}green-600`;
      case "yellow":
        return `${prefix}yellow-500`;
      case "orange":
        return `${prefix}orange-500`;
      case "red":
        return `${prefix}red-600`;
      default:
        return `${prefix}gray-500`;
    }
  };

  return (
    <div className="!tremor-Card-root !relative !text-left !ring-1 !rounded-tremor-default !p-2 !bg-tremor-background !ring-tremor-ring !shadow-tremor-card !border-tremor-brand !w-full !space-y-6">
      <div className="flex items-center justify-between">
        {/* IP Rating */}
        <div className="w-2/5 !items-center !justify-start">
          <div className="flex gap-x-2">
            <h2 className="!text-base !font-semibold">IP Rating</h2>
            <div className="flex">
              <TooltipHero content={ipRatingTooltip} />
            </div>
          </div>
          <div className="!-mt-4">
            <div className="!flex !gap-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={classNames(
                    "!w-1 !h-4 !rounded",
                    i <= ipMetrics.overallScore?.bars
                      ? getColorClass(ipMetrics.overallScore?.color || "green")
                      : "!bg-gray-300"
                  )}
                ></div>
              ))}
            </div>
            <span className="!text-sm !text-gray-500">
              {ipMetrics.overallScore?.text || "Low Risk"}
            </span>
          </div>
        </div>

        {/* Report Brand */}
        <div className="!flex !items-center !justify-end !gap-1 !-mt-6">
          <div className="!flex !gap-2">
            <div className="!flex !flex-col !justify-center">
              <div
                id="brand-report"
                className="!flex !items-center !gap-1 !cursor-pointer"
              >
                <FaUserLock className="!text-gray-500 hover:!text-gray-700 hover:!cursor-pointer" />
                <h2 className="!text-sm !font-semibold whitespace-nowrap">
                  Click to Report Brand
                </h2>
              </div>
            </div>
            <h2 className="!text-base !font-semibold !text-green-600">0</h2>
          </div>
          <TooltipHero content={reportBrandTooltip} />
        </div>
      </div>

      {/* Metrics List */}
      <dl className="!grid !gap-6 !grid-cols-1 !mt-4">
        {data.map((item) => (
          <div key={item.name} className="!relative">
            <div className="!flex !items-center">
              <dt className="!text-sm !font-medium !text-gray-700 !pr-2">
                {item.name}
              </dt>
              <TooltipHero content={item.tooltip} />
            </div>
            <div className="!flex !items-center !mt-2 !gap-3">
              <div className="!flex !gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={classNames(
                      "!w-1 !h-4 !rounded",
                      i <= item.value
                        ? getColorClass(item.color, true)
                        : "!bg-gray-300"
                    )}
                  ></div>
                ))}
              </div>
              <span className="!text-sm !font-medium ">{item.text}</span>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
