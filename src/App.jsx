import BuyBox from "./components/BuyBox";
import Donut from "./components/Donut";
import KpiCard from "./components/KpiCard";
import Retailer from "./components/Retailer";
import TopSeller from "./components/TopSeller";
import { Card } from "@tremor/react";
import data from '../api.json'
import { useEffect } from "react";
function App() {

  useEffect(()=>{
    console.log("th", data.data.listingCount);
  })
  return (
    <div className="p-6 space-y-6 flex flex-col items-center justify-center bg-[#EBF4FC]">
      <KpiCard ipMetrics={data.ipMetrics} />
      <Card className="w-full space-y-6">
        <Donut />
        <Retailer listingCount={data.data.listingCount}/>
        <TopSeller />
        <BuyBox fulfillmentTypePercent={data.data.fulfillmentTypePercent}/>
      </Card>
    </div>
  );
}

export default App;
