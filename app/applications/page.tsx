import React from "react";
import SearchableTable from "@/src/components/tables/SearchableTable";

const Applications = () => {
  const applicationsData = [
    {
      applicant: "Lego Admin",
      status: "Pending",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "Steve Jobs",
      status: "Approved",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "David Goggins",
      status: "Approved",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "John Doe",
      status: "Pending",
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      createdAt: new Date(),
      photoUrl: "https://i.pravatar.cc/300",
    },
    {
      applicant: "Jane Doe",
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

export default Applications;
