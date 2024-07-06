"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { COURSES_ARRAY, ONBOARDING_PLAN_DETAILS } from "@/constants/fixtures";
import Course from "@/src/components/Course";
import BaseCard from "@/src/components/cards/BaseCard";
import SearchableInput from "@/src/components/inputs/SearchInput";
import { formatDate } from "@/util/helpers";
import isAuth from "@/src/components/isAuth";
import {
  getCollectionEntries,
  subscribeToDocument,
  updateDocEntry,
} from "@/services/firebase/helpers";
import {
  COURSES_COLLECTION,
  PLANS_COLLECTION,
} from "@/constants/collectionNames";
import { toast } from "react-toastify";
import Loading from "@/src/components/LoadingComponent";

const OnboardingPlan = ({ user }: { user: any }) => {
  const fixedPlan = ONBOARDING_PLAN_DETAILS;
  const params = useParams();
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState({});
  const [searchedCourse, setSearchedCourse] = useState<string>("");
  const [courses, setCourses] = useState<Array<any>>([]);
  const [plan, setPlan] = useState<any>({});
  const [firebaseCourses, setFirebaseCourses] = useState<Array<any>>([]);

  const handleOnUpdateData = (newChanges: any) => {
    setPlan(newChanges);
  };

  useEffect(() => {
    if (searchedCourse.length > 0) {
      setCourses(
        firebaseCourses.filter((elt) =>
          elt.title
            .toLocaleLowerCase()
            .includes(searchedCourse.toLocaleLowerCase())
        )
      );
    } else {
      setCourses(firebaseCourses);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedCourse]);

  useEffect(() => {
    let result: any = [];
    (async () => {
      result = await getCollectionEntries(COURSES_COLLECTION);
      setFirebaseCourses(result);
    })();
    return () =>
      subscribeToDocument(
        PLANS_COLLECTION,
        handleOnUpdateData,
        params.id.toLocaleString()
      );
  }, [params.id]);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchedCourse(e.target.value.trim());
  };

  const handleSubmitOnboardingCourse = async (courseData: any) => {
    console.log("------", courseData);

    const course = { ...courseData, completed: false };
    const ONBOARDING_COURSES = plan.onboardingPlan
      ? [...plan.onboardingPlan.courses, course]
      : [course];
    const onboardingPlan = {
      courses: ONBOARDING_COURSES,
      progress: plan.onboardingPlan ? plan.onboardingPlan.progress : 0,
      finishedCourses: plan.onboardingPlan
        ? plan.onboardingPlan.finishedCourses
        : 0,
      totalCourses: ONBOARDING_COURSES.length,
    };

    const newApplicationInfo = { ...plan, onboardingPlan };
    const courseAdded = await updateDocEntry(
      PLANS_COLLECTION,
      params.id.toLocaleString(),
      newApplicationInfo
    );
    if (courseAdded) {
      toast.success("Course Added to Onboarding Plan", {
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 3000,
      });
    }
  };

  const handleDeleteCourse = (id: string) => {
    console.log("-----", id);
  };

  return (
    <div>
      {!plan.id ? (
        <Loading />
      ) : (
        <BaseCard className="px-10 py-10 flex flex-row max-md:flex-col max-md:divide-y-2 md:divide-x-2 text-textDarkColor">
          <div className="w-full pr-5">
            <h1 className="text-lg font-semibold text-textDarkColor">
              {plan.title}
            </h1>
            <span className="text-textLightColor/70 text-sm font-light">
              Created: {formatDate(plan.createdAt)}
            </span>
            <p className="text-sm text-textLightColor py-5">
              {plan.description}
            </p>
            <div className="flex justify-between">
              <span className="text-base text-textLightColor font-semibold">
                Taken By
              </span>
              <span className="text-base text-primary font-semibold">
                {plan.students} Students
              </span>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full md:px-10 max-md:pt-10">
              <h1 className="text-xl font-semibold text-textLightColor pb-5">
                Courses
              </h1>
              <div>
                {plan.onboardingPlan.courses.map((course: any) => (
                  <div key={course.title}>
                    <Course
                      title={course.title}
                      duration={course.duration ? course.duration : 0}
                      handleOnDelete={() => handleDeleteCourse(course.id)}
                    />
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
                              onClick={() =>
                                handleSubmitOnboardingCourse(course)
                              }
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
      )}
    </div>
  );
};

export default isAuth(OnboardingPlan);
