import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/cards/BaseCard";
// import Chart from "@/src/components/charts/Chart";
import React from "react";

const DashboardPage = () => {
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
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap justify-between items-center gap-1.5 py-1.5">
        {analytics.map((item) => (
          <div className="w-60 h-36 py-1.5" key={item.title}>
            <AnalyticsCard title={item.title} count={item.count} />
          </div>
        ))}
      </div>
      {/* <div>
        <Chart title="Weekly Onboarding hours" />
      </div> */}
      <div className="flex flex-row justify-between gap-5">
        <BaseCard className="px-10 py-5">
          <div className="flex flex-row justify-between p-1.5 mb-5">
            <h1 className="text-xl">More statistics</h1>
            <span className="text-textLightColor font-light">Just Now</span>
          </div>
          {moreStatistics.map((item) => (
            <div key={item.title}>
              <div className="flex flex-row justify-between p-1.5">
                <h1 className="font-light">{item.title}</h1>
                <span className="text-textLightColor">{item.count}</span>
              </div>
              <hr />
            </div>
          ))}
        </BaseCard>
        <BaseCard className="w-3/4">
          <h1>Feedback and reviews</h1>
        </BaseCard>
      </div>
    </div>
  );
};

export default DashboardPage;
