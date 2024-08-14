import { getAllStaff } from "@/services/firebase/authentication";
import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/cards/BaseCard";
import UsersTable from "@/src/components/tables/UsersTable";
import Chart from "@/src/components/charts/Chart";
import React, { useEffect, useState } from "react";
import { subscribeToCollection } from "@/services/firebase/helpers";
import { APPLICATIONS_COLLECTION } from "@/constants/collectionNames";
import moment from "moment";
import { Icon } from "@iconify/react/dist/iconify.js";

const DashboardPage = () => {
  const moreStatistics = [
    { title: "Finished Onboarding", count: 0 },
    { title: "Currently Onboarding", count: 2 },
    { title: "Available courses", count: 1 },
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
  const generateReport = () => {
    console.log("--------");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap justify-between max-md:justify-start items-center gap-1.5 py-1.5">
        {analytics.map((item) => (
          <div className="w-60 py-1.5 max-sm:w-32" key={item.title}>
            <AnalyticsCard title={item.title} count={item.count} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center">
        <span>
          {" "}
          {
            "// To add how to generate report: Once should choose a date for the report //"
          }{" "}
          {moment().fromNow()}
        </span>
        <button
          type="button"
          onClick={() => generateReport()}
          className="h-12 text-white bg-primary hover:bg-primaryDark focus:outline-none font-medium rounded-lg text-md text-center px-4 flex flex-row items-center justify-center"
        >
          <span className="pr-2">Generate Report</span>
          <Icon icon="material-symbols:download" fontSize={24} />
        </button>
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
