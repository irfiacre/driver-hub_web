"use client";
import React, { useState } from "react";
import ApplicantProgress from "@/src/components/ApplicantProgress";
import BaseCard from "@/src/components/cards/BaseCard";
import ApplicantProgressCard from "@/src/components/cards/ApplicantProgressCard";

const ApplicantsPage = ({ applicants }: { applicants: Array<any> }) => {
  const [selectedChatPartner, setSelectedChatPartner] = useState(applicants[0]);

  const handleClickChartPartner = (partner: any) => {
    setSelectedChatPartner(partner);
  };
  return (
    <div className="w-full py-10 flex flex-row max-md:flex-col gap-2 text-textDarkColor max-h-svh">
      <div className="w-3/4 max-md:w-full">
        <BaseCard className="px-5 py-5 overflow-auto h-5/6">
          {applicants.map((applicant) => (
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

      <BaseCard className="w-full px-10 py-5 h-5/6">
        <ApplicantProgressCard
          photoUrl={selectedChatPartner.photoUrl}
          name={selectedChatPartner.name}
        />
      </BaseCard>
    </div>
  );
};

export default ApplicantsPage;
