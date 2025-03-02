import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

// Enhanced Tooltip Component
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

export default function BuyBox({ fulfillmentTypePercent }) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Default values if props are not provided
  const defaultData = {
    wfs: "0.0",
    mfn: "0.0",
    wmt: "0.0",
    oos: "0.0"
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
    { name: "OOS", percentage: oos, color: "#E5E7EB" }
  ];
  
  // Calculate total for normalization
  const total = segments.reduce((sum, segment) => sum + segment.percentage, 0);
  
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-gray-800">BuyBox Composition</h3>
          <div className="relative inline-block">
            <IoInformationCircleOutline 
              className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer text-xl" 
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
      
      {/* Custom Progress Bar */}
      <div className="w-full h-4 rounded-full overflow-hidden flex mb-6">
        {segments.map((segment, index) => (
          <div 
            key={index}
            className="h-full transition-all duration-500 ease-in-out" 
            style={{ 
              width: `${total > 0 ? (segment.percentage / total) * 100 : 0}%`,
              backgroundColor: segment.color 
            }}
          />
        ))}
      </div>
      
      {/* Percentage Indicators */}
      <div className="grid grid-cols-4 gap-4">
        {segments.map((segment, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">{segment.percentage.toFixed(1)}%</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: segment.color }}></div>
              <span className="text-sm font-medium text-gray-600">{segment.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}