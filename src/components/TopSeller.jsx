import React, { useState } from 'react';
import { BarList } from "@tremor/react";
import { IoInformationCircleOutline } from "react-icons/io5";


const Tooltip = ({ content, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="absolute z-50 w-64 p-4 text-sm bg-white rounded-lg shadow-xl border border-gray-200 left-0 top-6 transform -translate-x-1/4 animate-fadeIn">
      <div className="relative">
       
        <div className="text-gray-700 font-medium">{content}</div>
      </div>
    </div>
  );
};

const country = [
  {
    name: "United States of America",
    value: 2422,
  },
  {
    name: "India",
    value: 1560,
  },
  {
    name: "Germany",
    value: 680,
  },
  {
    name: "Brazil",
    value: 580,
  },
  {
    name: "United Kingdom",
    value: 510,
  },
];

const city = [
  {
    name: "London",
    value: 1393,
  },
  {
    name: "New York",
    value: 1219,
  },
  {
    name: "Mumbai",
    value: 921,
  },
  {
    name: "Berlin",
    value: 580,
  },
  {
    name: "San Francisco",
    value: 492,
  },
];

const tabs = [
  {
    name: "City",
    data: city,
  },
  {
    name: "Country",
    data: country,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export default function TopSeller() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start gap-2">
          <p className="text-tremor-content-strong">Top Sellers</p>
          <div className="flex flex-col justify-center">
            <div className="relative inline-block">
              <IoInformationCircleOutline 
                className="text-gray-500 hover:text-blue-700 transition-colors cursor-pointer text-xl" 
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              <Tooltip 
                content="Data is based on the top 40 best-selling items"
                isVisible={showTooltip}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <BarList data={country} valueFormatter={valueFormatter} />
      </div>
    </>
  );
}