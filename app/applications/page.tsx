"use client";
import React, { useEffect, useState } from "react";
import SearchableTable from "@/src/components/tables/SearchableTable";
import isAuth from "@/src/components/isAuth";
import { subscribeToCollection } from "@/services/firebase/helpers";
import { APPLICATIONS_COLLECTION } from "@/constants/collectionNames";
import Loading from "@/src/components/LoadingComponent";

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
  const [data, setData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) =>
    setData((prevData: any) => [...prevData, newChanges]);
  useEffect(() => {
    return () =>
      subscribeToCollection(APPLICATIONS_COLLECTION, handleOnUpdateData);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {!data[0] ? <Loading /> : <SearchableTable data={data} />}
    </div>
  );
};

export default isAuth(Applications);
