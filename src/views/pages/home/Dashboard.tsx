import { getAllStaff } from "@/services/firebase/authentication";
import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/cards/BaseCard";
import UsersTable from "@/src/components/tables/UsersTable";
import Chart from "@/src/components/charts/Chart";
import React, { useEffect, useState } from "react";
import { subscribeToCollection } from "@/services/firebase/helpers";
import { APPLICATIONS_COLLECTION } from "@/constants/collectionNames";

const DashboardPage = () => {
  // const analytics = [
  //   {
  //     title: "Applications",
  //     count: 150,
  //   },
  //   {
  //     title: "Accepted",
  //     count: 121,
  //   },
  //   {
  //     title: "Pending",
  //     count: 10,
  //   },
  //   {
  //     title: "Rejected",
  //     count: 5,
  //   },
  // ];

  const moreStatistics = [
    { title: "Finished Onboarding", count: 0 },
    { title: "Currently Onboarding", count: 2 },
    { title: "Available courses", count: 2 },
  ];
  const fetchStaff = async () => await getAllStaff();

  const [allStaff, setStaff] = useState([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const userObj = JSON.parse(userStr);
      if (userObj.role === "admin") {
        fetchStaff().then((result: any) => setStaff(result));
      }
      setUser(userObj);
    }
  }, []);

  const [data, setData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) =>
    setData((prevData: any) => [...prevData, newChanges]);
  useEffect(() => {
    return () =>
      subscribeToCollection(APPLICATIONS_COLLECTION, handleOnUpdateData);
  }, []);

  const analytics = [
    {
      title: "Applications",
      count: data.length,
    },
    {
      title: "Accepted",
      count: data.filter((elt: any) => elt.status === "approved").length,
    },
    {
      title: "Pending",
      count: data.filter((elt: any) => elt.status === "pending").length,
    },
    {
      title: "Rejected",
      count: data.filter((elt: any) => elt.status === "rejected").length,
    },
  ];
  console.log("-------", analytics);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap justify-between max-md:justify-start items-center gap-1.5 py-1.5">
        {analytics.map((item) => (
          <div className="w-60 py-1.5 max-sm:w-32" key={item.title}>
            <AnalyticsCard title={item.title} count={item.count} />
          </div>
        ))}
      </div>
      <div>
        <Chart title="Weekly Onboarding hours" />
      </div>

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
      {user?.role === "admin" && <UsersTable data={allStaff} />}
    </div>
  );
};

export default DashboardPage;
