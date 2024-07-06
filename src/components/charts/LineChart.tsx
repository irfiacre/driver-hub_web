"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: true });

const LineChart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      },
    },
    series: [
      {
        name: "Hours",
        data: [500, 400, 105, 50, 249, 600, 700],
      },
    ],
  });
  return (
    <div className="w-full">
      <Chart
        options={{ ...state.options, colors: ["#858597"] }}
        series={state.series}
        type="area"
        height={320}
        width={"100%"}
      />
    </div>
  );
};

export default LineChart;
