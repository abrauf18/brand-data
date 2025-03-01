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

export default function BuyBox() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Data for the progress bar segments with OOS percentage
  const segments = [
    { name: "WFS", percentage: 82, color: "#2563EB" },
    { name: "MFN", percentage: 13, color: "#6B7280" },
    { name: "WMT", percentage: 5, color: "#EF4444" },
    { name: "OOS", percentage: 8, color: "#E5E7EB" } // Added OOS with 8%
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
              width: `${(segment.percentage / total) * 100}%`,
              backgroundColor: segment.color 
            }}
          />
        ))}
      </div>
      
      {/* Percentage Indicators */}
      <div className="grid grid-cols-4 gap-4">
        {segments.map((segment, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">{segment.percentage}%</span>
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