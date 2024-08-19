"use client";
import React, { useEffect, useState } from "react";
import ApplicantProgress from "@/src/components/ApplicantProgress";
import BaseCard from "@/src/components/cards/BaseCard";
import ApplicantProgressCard from "@/src/components/cards/ApplicantProgressCard";
import { APPLICANT_COURSES } from "@/constants/fixtures";
import SearchableInput from "@/src/components/inputs/SearchInput";

const ApplicantsPage = ({ applicants }: { applicants: Array<any> }) => {
  const [selectedChatPartner, setSelectedChatPartner] = useState<any>(null);
  const [searchedApplicant, setSearchedApplicant] = useState<string>("");
  const [applicantsState, setApplicantState] = useState<Array<any>>([]);

  useEffect(() => {
    if (searchedApplicant.length > 0) {
      setApplicantState(
        applicants.filter((elt) =>
          elt.name.toLowerCase().includes(searchedApplicant.toLowerCase())
        )
      );
    } else {
      setApplicantState(applicants);
    }
    setSelectedChatPartner(applicants[0]);
  }, [applicants, searchedApplicant]);

  const handleClickChartPartner = (partner: any) => {
    setSelectedChatPartner(partner);
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchedApplicant(e.target.value);
  };

  // console.log("----", selectedChatPartner?.onboardingPlan.courses);
  const finishedCourses =
    selectedChatPartner?.onboardingPlan.courses.filter(
      (elt: any) => elt.completed
    ).length || 0;
  const totalCourses = selectedChatPartner?.onboardingPlan.courses.length || 0;

  const percentage = Math.round((finishedCourses / totalCourses) * 100);

  return (
    <div className="w-full py-10 flex flex-row max-md:flex-col gap-2 text-textDarkColor">
      <div
        className="w-3/4 max-md:w-full"
        style={{
          height: "60vh",
        }}
      >
        <div className="p-1.5">
          <SearchableInput
            inputID="applicantSearch"
            value={searchedApplicant}
            onInputChange={handleInputChange}
            inputClassName="rounded-xl"
            placeholder="Search applicant..."
          />
        </div>

        <BaseCard className="px-5 py-5 overflow-auto h-full">
          {applicantsState.map((application) => (
            <div
              key={application.applicant.userId}
              onClick={() => handleClickChartPartner(application)}
            >
              <ApplicantProgress
                key={application.applicant.userId}
                photoUrl={application.baseInformation.passportPhotoUrl}
                name={`${application.applicant.firstName} ${application.applicant.lastName}`}
                progress={`Progress ${percentage}%`}
              />
              <hr />
            </div>
          ))}
        </BaseCard>
      </div>

      <BaseCard className="w-full px-10 py-5 h-5/6  max-md:mt-16">
        {
          <ApplicantProgressCard
            photoUrl={
              selectedChatPartner
                ? selectedChatPartner.baseInformation.passportPhotoUrl
                : ""
            }
            name={
              selectedChatPartner
                ? `${selectedChatPartner.applicant.firstName} ${selectedChatPartner.applicant.lastName}`
                : ""
            }
            overAllProgress={selectedChatPartner ? percentage : 0}
            onboardingCourses={
              selectedChatPartner
                ? selectedChatPartner.onboardingPlan.courses
                : []
            }
            statistics={{
              finishedCourses: finishedCourses,
              totalCourses: totalCourses,
            }}
          />
        }
      </BaseCard>
    </div>
  );
};

export default ApplicantsPage;
