"use client";
import React, { useEffect, useState } from "react";
import ApplicantsPage from "@/src/views/pages/ApplicantsPage";
import isAuth from "@/src/components/isAuth";
import {
  getCollectionEntries,
  subscribeToCollection,
} from "@/services/firebase/helpers";
import { APPLICATIONS_COLLECTION } from "@/constants/collectionNames";
import Loading from "@/src/components/LoadingComponent";

const Applicants = () => {
  const [data, setData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) => {
    if (newChanges.status === "approved") {
      setData((prevData: any) => [...prevData, newChanges]);
    }
  };

  const findInitialEmployees = async () => {
    const result = await getCollectionEntries(APPLICATIONS_COLLECTION);
    const employees = result.filter((elt: any) => elt.status === "approved");
    setData(employees);
  };

  useEffect(() => {
    findInitialEmployees();
    return () =>
      subscribeToCollection(APPLICATIONS_COLLECTION, handleOnUpdateData);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {!data[0] ? <Loading /> : <ApplicantsPage applicants={data} />}
    </div>
  );
};

export default isAuth(Applicants);
