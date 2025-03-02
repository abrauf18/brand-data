import BuyBox from "./components/BuyBox";
import Donut from "./components/Donut";
import KpiCard from "./components/KpiCard";
import Retailer from "./components/Retailer";
import TopSeller from "./components/TopSeller";
import data from "../api.json";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log("th", data.data.listingCount);
  });
  return (
    <div className="!p-2 sm:!p-6 !space-y-6 !flex !flex-col !items-center !justify-center !bg-[#EBF4FC]">
      <KpiCard ipMetrics={data.ipMetrics} />
      <div className="!tremor-Card-root !relative !text-left !ring-1 !space-y-6 !rounded-tremor-default !p-6 !bg-tremor-background !ring-tremor-ring !shadow-tremor-card  !border-tremor-brand  !w-full">
        <Donut />
        <Retailer listingCount={data.data.listingCount} />
        <TopSeller />
        <BuyBox fulfillmentTypePercent={data.data.fulfillmentTypePercent} />
      </div>
    </div>
  );
}

export default App;
