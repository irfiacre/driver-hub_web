import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/cards/BaseCard";
import Chart from "@/src/components/charts/Chart";
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

  const moreStatistics = [
    { title: "Finished Onboarding", count: 456 },
    { title: "Currently Onboarding", count: 120 },
    { title: "Available courses", count: 30 },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div>
        <BaseCard>
          <strong>Some Table</strong>
        </BaseCard>
      </div>
    </div>
  );
};

export default Dashboard;
