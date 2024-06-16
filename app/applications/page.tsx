import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/cards/BaseCard";
import Chart from "@/src/components/charts/Chart";
import SearchableTable from "@/src/components/tables/SearchableTable";
import React from "react";

const Dashboard = () => {
  const analytics = [
    {
      title: "Applications",
      count: 150,
    },
    {
      title: "Accepted",
      count: 121,
    },
    {
      title: "Pending",
      count: 10,
    },
    {
      title: "Rejected",
      count: 5,
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div>
        <SearchableTable />
      </div>
    </div>
  );
};

export default Dashboard;
