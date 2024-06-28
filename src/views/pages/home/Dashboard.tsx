import { getAllStaff } from "@/services/firebase/authentication";
import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/cards/BaseCard";
import UsersTable from "@/src/components/tables/UsersTable";
// import Chart from "@/src/components/charts/Chart";
import React, { useEffect, useState } from "react";

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
  const fetchStaff = async () => await getAllStaff();

  const [allStaff, setStaff] = useState([]);
  useEffect(() => {
    fetchStaff().then((result: any) => setStaff(result));
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap justify-between max-md:justify-start items-center gap-1.5 py-1.5">
        {analytics.map((item) => (
          <div className="w-60 py-1.5 max-sm:w-32" key={item.title}>
            <AnalyticsCard title={item.title} count={item.count} />
          </div>
        ))}
      </div>
      {/* <div>
        <Chart title="Weekly Onboarding hours" />
      </div> */}

      <BaseCard className="px-10 py-5">
        <div className="flex flex-row justify-between p-1.5 mb-5">
          <h1 className="text-xl">More statistics</h1>
          <span className="text-textLightColor font-light">Just Now</span>
        </div>
        {moreStatistics.map((item) => (
          <div key={item.title}>
            <div className="flex flex-row justify-between p-1.5">
              <h1 className="font-medium">{item.title}</h1>
              <span className="text-textLightColor">{item.count}</span>
            </div>
            <hr />
          </div>
        ))}
      </BaseCard>
      <UsersTable data={allStaff} />
    </div>
  );
};

export default DashboardPage;
