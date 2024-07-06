"use client";
import React, { useEffect, useState } from "react";
import { PLANS_COLLECTION } from "@/constants/collectionNames";
import { ONBOARDING_PLANS } from "@/constants/fixtures";
import { subscribeToCollection } from "@/services/firebase/helpers";
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

  useEffect(() => {
    setLoading(true);
    return () => subscribeToCollection(PLANS_COLLECTION, handleOnUpdateData);
  }, []);

  return (
    <div>{loading ? <Loading /> : <OnboardingPlansTable data={data} />}</div>
  );
};

export default isAuth(OnboardingPlans);
