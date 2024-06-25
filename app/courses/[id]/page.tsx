"use client";
import React, { useEffect, useState } from "react";
import {
  ADMIN,
  COURSES_ARRAY,
  ONBOARDING_PLAN_DETAILS,
} from "@/constants/fixtures";
import Course from "@/src/components/Course";
import BaseCard from "@/src/components/cards/BaseCard";
import SearchableInput from "@/src/components/inputs/SearchInput";
import { Icon } from "@iconify/react";
import { formatDate } from "@/util/helpers";
import isAuth from "@/src/components/isAuth";
// import Chart from "@/src/components/charts/Chart";
// import LineChart from "@/src/components/charts/LineChart";

const CourseDetails = () => {
  const plan = ONBOARDING_PLAN_DETAILS;
  const user = ADMIN;
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

  const handleSecondaryBtn = (condition: string) => {
    switch (condition) {
      case "delete":
        console.log("Handle delete");
        break;
      default:
        console.log("Handle mark ready");
        break;
    }
  };
  return (
    <div>
      <BaseCard className="px-10 py-10 flex flex-row max-md:flex-col max-md:divide-y-2 md:divide-x-2 text-textDarkColor">
        <div className="w-full pr-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-textDarkColor">
                {plan.title}
              </h1>
            </div>
            <button
              className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-red-600 bg-inherit rounded-full hover:bg-red-600 hover:text-white focus:outline-none"
              type="button"
              onClick={() => handleSecondaryBtn("delete")}
            >
              <Icon icon="mdi:delete" fontSize={20} />
            </button>
          </div>
          <span className="text-textLightColor/70 text-sm font-light">
            Created: {formatDate(plan.createdAt)}
          </span>
          <p className="text-sm text-textLightColor py-5">{plan.description}</p>
          <div className="flex justify-between">
            <span className="text-base text-textLightColor font-semibold">
              Taken By
            </span>
            <span className="text-base text-primary font-semibold">
              {plan.students} Students
            </span>
          </div>
          <div className="py-5">
            <span className="text-yellow-400">{`"TODO: Implement analytics chart to show assignments"`}</span>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full md:px-10 max-md:pt-10">
            <h1 className="text-xl font-semibold text-textLightColor pb-5">
              Courses
            </h1>
            <div>
              {plan.courses.map((course) => (
                <div key={course.title}>
                  <Course title={course.title} duration={course.duration} />
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
          </div>
        </div>
      </BaseCard>
    </div>
  );
};

export default isAuth(CourseDetails);
