import React from "react";
import Chart from "react-apexcharts";

export default function BalanceChart() {
  const options = {
    chart: {
      id: "balance-stats",
      toolbar: { show: false },
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
    },
    colors: ["#4f46e5"], // Primary color
    stroke: { curve: "smooth" },
    grid: { show: true },
    tooltip: {
      theme: "light",
      y: { formatter: val => `$${val.toLocaleString()}` },
    },
  };

  const series = [
    {
      name: "Balance",
      data: [
        12000, 14000, 13000, 15000, 16000, 15500,
        16500, 17000, 17500, 18000, 18500, 19000
      ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow card-shadow">
      <h3 className="font-semibold mb-4">Balance Statistics</h3>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
}
