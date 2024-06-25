"use client";
import React from "react";
import { ONBOARDING_PLANS } from "@/constants/fixtures";
import CoursesTable from "@/src/components/tables/CoursesTable";
import isAuth from "@/src/components/isAuth";

const Courses = () => {
  const applicationsData = ONBOARDING_PLANS;
  return (
    <div>
      <CoursesTable data={applicationsData} />
    </div>
  );
};

export default isAuth(Courses);
