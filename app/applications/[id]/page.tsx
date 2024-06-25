"use client";
import {
  APPLICATION_DETAILS,
  COURSES_ARRAY,
  OFFICER,
} from "@/constants/fixtures";
import Course from "@/src/components/Course";
import PillComponent from "@/src/components/PillComponent";
import BaseCard from "@/src/components/cards/BaseCard";
import SearchableInput from "@/src/components/inputs/SearchInput";
import isAuth from "@/src/components/isAuth";
import BaseModel from "@/src/components/models/BaseModel";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface DocumentProps {
  name: string;
  type: string;
  url: string;
}

const Application = () => {
  const application = APPLICATION_DETAILS;
  const user = OFFICER;
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentProps | null>(null);
  const [searchedCourse, setSearchedCourse] = useState<string>("");
  const [courses, setCourses] = useState<Array<any>>([]);

  useEffect(() => {
    // To Update searched course
    console.log(
      "=====",
      COURSES_ARRAY.filter((elt) =>
        elt.title
          .toLocaleLowerCase()
          .includes(searchedCourse.toLocaleLowerCase())
      )
    );

    if (searchedCourse.length > 0) {
      setCourses(
        COURSES_ARRAY.filter((elt) => elt.title.includes(searchedCourse))
      );
    }
  }, [searchedCourse]);
  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchedCourse(e.target.value.trim());
  };
  const handleCourseClick = (course: any) => {
    console.log("Should Add course to Applicant onboarding", course);
  };

  const handleOpenChat = () => {
    console.log("Handle Open chat");
  };
  const handleSecondaryBtn = (condition: string) => {
    switch (condition) {
      case "approve":
        console.log("Handle approve");
        break;
      case "delete":
        console.log("Handle delete");
        break;
      default:
        console.log("Handle mark ready");
        break;
    }
  };

  return (
    <BaseCard className="px-10 py-10 flex flex-row max-md:flex-col max-md:divide-y-2 md:divide-x-2 text-textDarkColor">
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
        <h1 className="text-2xl py-5 font-semibold text-textDarkColor">
          {application.applicant.name}
        </h1>
        <div>
          <p className="text-base text-textLightColor font-medium py-1.5">
            National ID:
            <span className="text-textDarkColor font-light px-5">
              {application.nationalID}
            </span>
          </p>
          <p className="text-base text-textLightColor font-medium py-1.5">
            Driver License:
            <span className="text-textDarkColor font-light px-5">
              {application.driverLicenseNumber}
            </span>
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

        <h2 className="text-xl py-5">Documents</h2>
        <div className="flex flex-row flex-wrap">
          {application.documents.map((document) => (
            <PillComponent
              key={document.name}
              text={document.name}
              handleClick={() => setSelectedDocument(document)}
            />
          ))}
        </div>
        <div className="text-center py-10">
          <button
            type="button"
            onClick={handleOpenChat}
            className="-ml-16 px-16 h-16 text-white bg-primary hover:bg-primaryDark focus:outline-none font-medium rounded-xl text-base text-center py-3"
          >
            Open Chat
          </button>
        </div>
      </div>
      <div className="w-full md:px-10 max-md:pt-10">
        <h1 className="text-xl font-semibold text-textLightColor pb-5">
          Onboarding Plan
        </h1>
        <div>
          {application.onboardingPlan.map((plan) => (
            <div key={plan.title}>
              <Course title={plan.title} duration={plan.duration} />
              <hr />
            </div>
          ))}
          <div className="py-1.5">
            <SearchableInput
              inputID="courseSearch"
              value={searchedCourse}
              onInputChange={handleInputChange}
              inputClassName="rounded-lg"
              placeholder="Search course to add..."
            />

            <div className="p-1.5">
              {courses.length > 0 && (
                <BaseCard>
                  {courses.map((course, index) => (
                    <div key={course.id}>
                      <div
                        className={`px-1.5 cursor-pointer hover:bg-primary/25 ${
                          index === 0 && "rounded-t-lg"
                        }`}
                        onClick={() => handleCourseClick(course)}
                      >
                        <Course
                          title={course.title}
                          duration={course.duration}
                        />
                      </div>
                      <hr />
                    </div>
                  ))}
                </BaseCard>
              )}
            </div>
          </div>
        </div>

        {user.role !== "admin" ? (
          <div className="text-center py-10">
            <button
              type="button"
              onClick={() => handleSecondaryBtn("markReady")}
              className="px-16 h-16 text-primary border border-primary hover:bg-successGreen hover:text-white hover:border-none focus:outline-none font-medium rounded-xl text-base text-center py-3"
            >
              Mark Ready for Approval
            </button>
          </div>
        ) : (
          <div className="py-10 flex flex-row justify-center items-center gap-5">
            <button
              type="button"
              onClick={() => handleSecondaryBtn("approve")}
              className="px-10 py-3 border border-successGreen/60 text-successGreen hover:bg-successGreen hover:text-white focus:outline-none font-medium rounded-xl text-base text-center"
            >
              Approve
            </button>
            <button
              type="button"
              onClick={() => handleSecondaryBtn("delete")}
              className="px-10 py-3 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white hover:border-none focus:outline-none font-medium rounded-xl text-base text-center"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </BaseCard>
  );
};

export default isAuth(Application);
