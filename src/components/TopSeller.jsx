import { BarList } from "@tremor/react";
import { Info } from "lucide-react";

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
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start gap-2">
          <p className=" text-tremor-content-strong ">Top Sellers</p>
          <Info className="text-gray-300 w-4 h-4" />
        </div>
      </div>
      <div className="mt-6">
        <BarList data={country} valueFormatter={valueFormatter} />
      </div>
    </>
  );
}
