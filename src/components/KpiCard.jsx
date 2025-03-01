import { Card } from "@tremor/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "Unique Offers on BuyBox",
    text: "Medium",
    value: 2,
  },
  {
    name: "Brand on Listings - Match Detected",
    text: "Dyson, Inc",
    value: 1,
  },
  {
    name: "Offers on Listings",
    text: "High offer count observed",
    value: 3,
  },
];

export default function KpiCard() {
  return (
    <Card className="w-full">
      <div className="flex items-center justify-start gap-3">
        <h2 className="text-lg font-semibold ">IP Rating</h2>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-green-600 rounded"></div>
            <div className="w-1 h-4 bg-green-600 rounded"></div>
            <div className="w-1 h-4 bg-green-600 rounded"></div>
          </div>
          <span className="text-sm text-muted-foreground">Low Risk</span>
        </div>
      </div>
      <dl className="grid gap-6 grid-cols-1 sm:grid-cols-3 mt-4">
        {data.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between">
              <dt className="text-tremor-default font-medium text-gray-content">
                {item.name}
              </dt>
            </div>
            <div className="flex items-center mt-1 gap-3 text-tremor-content">
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={classNames(
                      "w-1 h-4 rounded",
                      i <= item.value
                        ? 1 === item.value
                          ? "bg-red-600"
                          : 2 === item.value
                          ? "bg-orange-400"
                          : "bg-green-600"
                        : "bg-gray-300"
                    )}
                  ></div>
                ))}
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          </div>
        ))}
      </dl>
    </Card>
  );
}
