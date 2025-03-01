import { RiSearchLine } from "@remixicon/react";
import {
  Dialog,
  DialogPanel,
  List,
  ListItem,
  ProgressBar,
  TextInput,
} from "@tremor/react";
import { Info } from "lucide-react";

export default function BuyBox() {
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <h3 className=" text-tremor-content-strong ">BuyBox Composition</h3>
        <Info className="text-gray-300 w-4 h-4" />
      </div>
      <ProgressBar value={78.2} className="mt-6 [&>*]:bg-tremor-border " />

      <div className="flex items-center gap-4 mt-4 justify-between">
        <div>
          <h3 className="text-tremor-content-strong font-medium">83%</h3>
          <div className="flex items-center gap-1 ">
            <div className="w-2 h-2 bg-blue-500 "></div>
            <span className="text-xs">WFS</span>
          </div>
        </div>
        <div>
          <h3 className="text-tremor-content-strong font-medium">13%</h3>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-500 "></div>
            <span className="text-xs">MFN </span>
          </div>
        </div>
        <div>
          <h3 className="text-tremor-content-strong font-medium">5%</h3>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 "></div>
            <span className="text-xs">WMT</span>
          </div>
        </div>
      </div>
    </>
  );
}
