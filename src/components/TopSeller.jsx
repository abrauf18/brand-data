import React from "react";
import { BarList } from "@tremor/react";

import { TooltipHero } from "./TooltipHero";

export default function TopSeller({ topSellers }) {
  if (!topSellers || topSellers.length === 0) {
    return null;
  }
  const topSellersUpdated = topSellers
    .map((item) => ({
      name: item.sellerName,
      value: item.total,
    }))
    .slice(0, 5);

  const tooltipContent = (
    <div className="!text-sm !text-black !font-medium">
      Data is based on the top 40 best-selling items
    </div>
  );

  return (
    <>
      <div className="!flex !items-center !justify-between !w-full">
        <div className="!flex !items-center !justify-center !gap-2">
          <p className="!text-tremor-content-strong !text-sm !font-semibold">
            Top Sellers
          </p>
          <TooltipHero content={tooltipContent} />
        </div>
      </div>
      <div className="!mt-6 ">
        <BarList data={topSellersUpdated} className="bar-list" />
      </div>
    </>
  );
}
