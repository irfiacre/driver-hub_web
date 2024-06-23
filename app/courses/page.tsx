import React from "react";
import { ONBOARDING_PLANS } from "@/constants/fixtures";
import CoursesTable from "@/src/components/tables/CoursesTable";

const Courses = () => {
  const applicationsData = ONBOARDING_PLANS;
  return (
    <div>
      <CoursesTable data={applicationsData} />
    </div>
  );
};

export default Courses;
