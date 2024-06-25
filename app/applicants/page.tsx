"use client";
import React from "react";
import { generateApplicant } from "@/constants/fixtures";
import ApplicantsPage from "@/src/views/pages/ApplicantsPage";
import isAuth from "@/src/components/isAuth";

const Applicants = () => {
  const applicants = [];
  for (let index = 0; index < 20; index++) {
    applicants.push(generateApplicant());
  }
  return (
    <div className="flex flex-col gap-3">
      <ApplicantsPage applicants={applicants} />
    </div>
  );
};

export default isAuth(Applicants);
