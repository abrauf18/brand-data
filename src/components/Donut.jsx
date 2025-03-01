import { Card, DonutChart } from "@tremor/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "Walmart In-Stock",
    amount: "144 Listings",
    share: "21%",
    borderColor: "bg-blue-500",
  },
  {
    name: "WFS In-Stock",
    amount: "30 Listings",
    share: "4%",
    borderColor: "bg-violet-500",
  },
  {
    name: "Pro Sellers In-Stock",
    amount: "5 Listings",
    share: "<1%",
    borderColor: "bg-fuchsia-500",
  },
];

export default function Donut() {
  return (
    <>
      <h3 className="text-lg font-semibold text-tremor-content-strong ">
        Brand Listing Data
      </h3>
      <div className="flex  items-start justify-start gap-6 p-4">
        <DonutChart
          data={[{ amount: 378 }, { amount: 200 }, { amount: 100 }]}
          category="amount"
          index="amount"
          showTooltip={false}
          className="h-40 "
          colors={["blue", "violet", "fuchsia"]}
        />
        <div className="flex items-start justify-start ">
          <ul role="list" className="space-y-2">
            <h3 className="text-xs font-medium whitespace-nowrap text-tremor-content-strong ">
              Listing Count Composition{" "}
            </h3>
            {data.map((item) => (
              <li key={item.name} className="flex space-x-3">
                <span
                  className={classNames(
                    item.borderColor,
                    "w-1 shrink-0 rounded"
                  )}
                />
                <div>
                  <p className="text-xs text-slate-900 ">
                    {item.amount}{" "}
                    <span className="font-normal text-green-600 ml-1">
                      {item.share}
                    </span>
                  </p>
                  <p className="mt-0.5 whitespace-nowrap text-xs text-slate-900 ">
                    {item.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
