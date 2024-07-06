"use client";
import React, { useEffect, useState } from "react";
import { generateApplicant } from "@/constants/fixtures";
import ApplicantsPage from "@/src/views/pages/ApplicantsPage";
import isAuth from "@/src/components/isAuth";
import { subscribeToCollection } from "@/services/firebase/helpers";
import {
  APPLICATIONS_COLLECTION,
  DRIVERS_COLLECTION,
} from "@/constants/collectionNames";
import Loading from "@/src/components/LoadingComponent";

const Applicants = () => {
  // const applicants = [];
  // for (let index = 0; index < 20; index++) {
  //   applicants.push(generateApplicant());
  // }
  const [data, setData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) =>
    setData((prevData: any) => [...prevData, newChanges]);
  useEffect(() => {
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
