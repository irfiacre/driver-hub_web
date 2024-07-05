"use client";
import React from "react";
import BaseCard from "../cards/BaseCard";
import LineChart from "./LineChart";

const Chart = ({ title }: { title: string }) => {
  return (
    <BaseCard className="px-10 py-2.5">
      <h1>{title}</h1>
      <LineChart />
    </BaseCard>
  );
};

export default Chart;
