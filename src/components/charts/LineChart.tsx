"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";

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
        categories: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
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
      />
    </div>
  );
};

export default LineChart;
