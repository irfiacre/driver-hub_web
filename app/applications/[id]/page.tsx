"use client";
import { COURSES_ARRAY } from "@/constants/fixtures";
import Course from "@/src/components/Course";
import PillComponent from "@/src/components/PillComponent";
import BaseCard from "@/src/components/cards/BaseCard";
import IconInput from "@/src/components/inputs/IconInput";
import BaseModel from "@/src/components/models/BaseModel";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface DocumentProps {
  name: string;
  type: string;
  url: string;
}

const Application = () => {
  const params = useParams();
  const application = {
    applicant: {
      name: "Lego Applicant",
      photoUrl: "https://i.pravatar.cc",
      id: params?.id,
    },
    nationalID: "XXXXX-XXXX-XXX",
    driverLicenseNumber: "XXXXX-XXXX-XXX",
    documents: [
      {
        name: "national id",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
      {
        name: "Proof of ownership",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
      {
        name: "Certificate of Good Conduct",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
      {
        name: "Last car checkup",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
    ],
    onboardingPlan: [
      { title: "Introduction", duration: 1 },
      { title: "[HowTo] - Driver Tool Kit", duration: 1.5 },
      { title: "Road Safety", duration: 0.5 },
    ],
  };
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentProps | null>(null);
  const [searchedCourse, setSearchedCourse] = useState<string>("");

  useEffect(() => {
    // To Update searched course
  }, [searchedCourse]);
  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchedCourse(e.target.value);
  };
  const handleIconClick = () => {};

  return (
    <BaseCard className="px-10 py-5 flex md:flex-row sm:flex-col divide-x-2">
      <div className="w-full">
        <Image
          className="rounded-xl cursor-pointer w-52 bg-textLightColor"
          loader={() => application.applicant.photoUrl}
          src={application.applicant.photoUrl}
          alt="Applicant photo"
          height={100}
          width={100}
          unoptimized
        />
        <h1>{application.applicant.name}</h1>
        <div>
          <p>
            NationalID number:<span>{application.nationalID}</span>
          </p>
          <p>
            Driver License Number:
            <span>{application.driverLicenseNumber}</span>
          </p>
        </div>
        {selectedDocument && (
          <BaseModel
            title={selectedDocument.name}
            onClose={() => setSelectedDocument(null)}
            containerStyle=" w-4/5"
          >
            <div className="p-1.5">
              <Image
                className="w-full h-96 cursor-pointer bg-textLightColor object-cover rounded-sm"
                loader={() => selectedDocument.url}
                src={selectedDocument.url}
                alt="Applicant photo"
                height={100}
                width={100}
                unoptimized
              />
            </div>
          </BaseModel>
        )}
        <h2>Documents</h2>
        <div className="flex flex-row flex-wrap">
          {application.documents.map((document) => (
            <PillComponent
              key={document.name}
              text={document.name}
              handleClick={() => setSelectedDocument(document)}
            />
          ))}
        </div>
      </div>
      <div className="w-full px-10">
        <h1 className="text-xl font-semibold text-textLightColor pb-5">
          Trainings
        </h1>
        <div>
          {application.onboardingPlan.map((plan) => (
            <div key={plan.title}>
              <Course title={plan.title} duration={plan.duration} />
              <hr />
            </div>
          ))}
          <div className="py-1.5">
            <IconInput
              inputID="course"
              value={searchedCourse}
              onInputChange={handleInputChange}
              onIconClick={handleIconClick}
              inputClassName="rounded-lg"
            />
            <div className="p-1.5">
              <BaseCard>
                {COURSES_ARRAY.map((course, index) => (
                  <div key={course.id}>
                    <div
                      className={`px-1.5 cursor-pointer hover:bg-primary/25 ${
                        index === 0 && "rounded-t-lg"
                      }`}
                    >
                      <Course title={course.title} duration={course.duration} />
                    </div>
                    <hr />
                  </div>
                ))}
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default Application;
