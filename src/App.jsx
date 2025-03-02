import BuyBox from "./components/BuyBox";
import Donut from "./components/Donut";
import KpiCard from "./components/KpiCard";
import Retailer from "./components/Retailer";
import TopSeller from "./components/TopSeller";
import data from "../api.json";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // console.log("%", data.data.listingCountPercent , "Total" , data.data.totalItemCount , "list" , data.data.listingCount);
  });
  return (
    <div className="!p-2 sm:!p-6 !space-y-6 !flex !flex-col !items-center !justify-center !bg-[#EBF4FC]">
      <KpiCard ipMetrics={data.ipMetrics} />
      <div className="!tremor-Card-root !relative !text-left !ring-1 !space-y-6 !rounded-tremor-default !p-6 !bg-tremor-background !ring-tremor-ring !shadow-tremor-card  !border-tremor-brand  !w-full">
        <Donut per={data.data.listingCountPercent} total={data.data.totalItemCount} listingCount={data.data.listingCount} brand={data.data.brand} />
        {/* <Retailer listingCount={data.data.listingCount} /> */}
        <TopSeller />
        <BuyBox fulfillmentTypePercent={data.data.fulfillmentTypePercent} />
      </div>
    </div>
  );
}

export default App;
