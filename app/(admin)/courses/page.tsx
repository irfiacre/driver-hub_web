"use client";
import React, { useEffect, useState } from "react";
import CoursesTable from "@/src/components/tables/CoursesTable";
import isAuth from "@/src/components/isAuth";
import {
  getCollectionEntries,
  subscribeToCollection,
} from "@/services/firebase/helpers";
import { COURSES_COLLECTION } from "@/constants/collectionNames";
import Loading from "@/src/components/LoadingComponent";

const Courses = () => {
  const [data, setData] = useState<any>([]);

  const initialFindApplications = async () => {
    const result = await getCollectionEntries(COURSES_COLLECTION);
    setData(result);
  };

  const handleOnUpdateData = (newChanges: any) =>
    setData((prevData: any) => [...prevData, newChanges]);

  useEffect(() => {
    initialFindApplications();
    return () => subscribeToCollection(COURSES_COLLECTION, handleOnUpdateData);
  }, []);

  return <div>{!data[0] ? <Loading /> : <CoursesTable data={data} />}</div>;
};

export default isAuth(Courses);