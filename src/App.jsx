import BuyBox from "./components/BuyBox";
import Donut from "./components/Donut";
import KpiCard from "./components/KpiCard";
import TopSeller from "./components/TopSeller";
import { Card } from "@tremor/react";

function App() {
  return (
    <div className="p-6 space-y-6 flex flex-col items-center justify-center bg-[#EBF4FC]">
      <KpiCard />
      <Card className="w-full space-y-6">
        <Donut />
        <TopSeller />
        <BuyBox />
      </Card>
    </div>
  );
}

export default App;
