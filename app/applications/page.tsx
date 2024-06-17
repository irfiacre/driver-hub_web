import React from "react";
import SearchableTable from "@/src/components/tables/SearchableTable";

const Dashboard = () => {
  const applicationsData = [
    {
      applicant: "Applicant Name 1",
      status: "Pending",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "Applicant Name 2",
      status: "Approved",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "Applicant Name 3",
      status: "Approved",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "Applicant Name 4",
      status: "Pending",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "Applicant Name 5",
      status: "Rejected",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div>
        <SearchableTable data={applicationsData} />
      </div>
    </div>
  );
};

export default Dashboard;
