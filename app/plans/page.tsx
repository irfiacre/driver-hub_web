"use client";
import { ONBOARDING_PLANS } from "@/constants/fixtures";
import isAuth from "@/src/components/isAuth";
import OnboardingPlansTable from "@/src/components/tables/OnboardingPlansTable";
import React from "react";

const OnboardingPlans = () => {
  const applicationsData = ONBOARDING_PLANS;
  return (
    <div>
      <OnboardingPlansTable data={applicationsData} />
    </div>
  );
};

export default isAuth(OnboardingPlans);
