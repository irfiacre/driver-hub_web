"use client";
import React, { useEffect, useState } from "react";
import ApplicantProgress from "@/src/components/ApplicantProgress";
import BaseCard from "@/src/components/cards/BaseCard";
import ApplicantProgressCard from "@/src/components/cards/ApplicantProgressCard";
import { APPLICANT_COURSES } from "@/constants/fixtures";
import SearchableInput from "@/src/components/inputs/SearchInput";

const ApplicantsPage = ({ applicants }: { applicants: Array<any> }) => {
  const [selectedChatPartner, setSelectedChatPartner] = useState(applicants[0]);
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
  }, [applicants, searchedApplicant]);

  const handleClickChartPartner = (partner: any) => {
    setSelectedChatPartner(partner);
  };

  const applicantStatistics = [
    { title: "Finished Courses", count: 1 },
    { title: "Unfinished Courses", count: 2 },
    { title: "Time Spent", count: "30 minutes" },
  ];

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchedApplicant(e.target.value);
  };

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
          {applicantsState.map((applicant) => (
            <div
              key={applicant.id}
              onClick={() => handleClickChartPartner(applicant)}
            >
              <ApplicantProgress
                key={applicant.id}
                photoUrl={applicant.photoUrl}
                name={applicant.name}
                progress={`Progress ${applicant.progress}%`}
              />
              <hr />
            </div>
          ))}
        </BaseCard>
      </div>

      <BaseCard className="w-full px-10 py-5 h-5/6  max-md:mt-16">
        <ApplicantProgressCard
          photoUrl={selectedChatPartner.photoUrl}
          name={selectedChatPartner.name}
          overAllProgress={20}
          onboardingCourses={APPLICANT_COURSES}
          statistics={applicantStatistics}
        />
      </BaseCard>
    </div>
  );
};

export default ApplicantsPage;
