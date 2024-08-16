"use client";
import React, { useEffect, useState } from "react";
import { PLANS_COLLECTION } from "@/constants/collectionNames";
import {
  getCollectionEntries,
  subscribeToCollection,
} from "@/services/firebase/helpers";
import isAuth from "@/src/components/isAuth";
import OnboardingPlansTable from "@/src/components/tables/OnboardingPlansTable";
import Loading from "@/src/components/LoadingComponent";

const OnboardingPlans = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) => {
    setData((prevData: any) => [...prevData, newChanges]);
    setLoading(false);
  };
  const findInitialPlans = async () => {
    const result = await getCollectionEntries(PLANS_COLLECTION);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    findInitialPlans();
    return () => subscribeToCollection(PLANS_COLLECTION, handleOnUpdateData);
  }, []);

  return (
    <div>{loading ? <Loading /> : <OnboardingPlansTable data={data} />}</div>
  );
};

export default isAuth(OnboardingPlans);
