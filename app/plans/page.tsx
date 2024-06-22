import { ONBOARDING_PLANS } from "@/constants/fixtures";
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

export default OnboardingPlans;
