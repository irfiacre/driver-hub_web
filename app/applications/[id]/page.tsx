"use client";
import {
  APPLICATIONS_COLLECTION,
  COURSES_COLLECTION,
} from "@/constants/collectionNames";
import { OFFICER } from "@/constants/fixtures";
import {
  getCollectionEntries,
  subscribeToDocument,
  updateDocEntry,
} from "@/services/firebase/helpers";
import Course from "@/src/components/Course";
import Loading from "@/src/components/LoadingComponent";
import PillComponent from "@/src/components/PillComponent";
import BaseCard from "@/src/components/cards/BaseCard";
import SearchableInput from "@/src/components/inputs/SearchInput";
import isAuth from "@/src/components/isAuth";
import BaseModel from "@/src/components/models/BaseModel";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface DocumentProps {
  name: string;
  type: string;
  url: string;
}

const Application = ({ user }: { user: any }) => {
  const params = useParams();
  const [applicationInfo, setApplicationInfo] = useState<any>({});
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentProps | null>(null);
  const [searchedCourse, setSearchedCourse] = useState<string>("");
  const [courses, setCourses] = useState<Array<any>>([]);
  const [firebaseCourses, setFirebaseCourses] = useState<Array<any>>([]);

  const handleOnUpdateData = (newChanges: any) => {
    setApplicationInfo(newChanges);
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
        APPLICATIONS_COLLECTION,
        handleOnUpdateData,
        params.id.toLocaleString()
      );
  }, [params.id]);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchedCourse(e.target.value.trim());
  };
  const handleSubmitOnboardingCourse = async (course: any) => {
    const ONBOARDING_COURSES = applicationInfo.onboardingPlan
      ? [...applicationInfo.onboardingPlan.courses, course]
      : [course];
    const onboardingPlan = {
      courses: ONBOARDING_COURSES,
      progress: applicationInfo.onboardingPlan
        ? applicationInfo.onboardingPlan.progress
        : 0,
      finishedCourses: applicationInfo.onboardingPlan
        ? applicationInfo.onboardingPlan.finishedCourses
        : 0,
      totalCourses: ONBOARDING_COURSES.length,
    };

    const newApplicationInfo = { ...applicationInfo, onboardingPlan };
    const courseAdded = await updateDocEntry(
      APPLICATIONS_COLLECTION,
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

  const handleOpenChat = () => {
    console.log("Handle Open chat");
  };
  const handleSecondaryBtn = async (condition: string) => {
    let STATUS = "";
    switch (condition) {
      case "approve":
        STATUS = "approved";
        break;
      case "reject":
        STATUS = "rejected";
        break;
      default:
        STATUS = "ready";
        break;
    }
    const newApplicationInfo = { ...applicationInfo, status: STATUS };
    const statusUpdated = await updateDocEntry(
      APPLICATIONS_COLLECTION,
      params.id.toLocaleString(),
      newApplicationInfo
    );
    if (statusUpdated) {
      toast.success(`Application Status Updated (${STATUS}) successfully`, {
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 3000,
      });
    }
  };

  return (
    <BaseCard className="px-10 py-10">
      {!applicationInfo.id ? (
        <Loading />
      ) : (
        <div className="flex flex-row max-md:flex-col max-md:divide-y-2 md:divide-x-2 text-textDarkColor">
          <div className="w-full">
            <Image
              className="rounded-xl cursor-pointer w-52 bg-textLightColor"
              loader={() => applicationInfo.baseInformation.passportPhotoUrl}
              src={applicationInfo.baseInformation.passportPhotoUrl}
              alt="Applicant photo"
              height={100}
              width={100}
              unoptimized
            />
            <h1 className="text-2xl py-5 font-semibold text-textDarkColor">
              {applicationInfo.applicant.firstName +
                " " +
                applicationInfo.applicant.lastName}
            </h1>
            <div>
              <p className="text-base text-textLightColor font-medium py-1.5">
                Application Status:
                <span
                  className={`font-light px-5 ${
                    applicationInfo.status === "ready"
                      ? "text-yellow-400"
                      : applicationInfo.status === "approved"
                      ? "text-successGreen"
                      : applicationInfo.status === "rejected"
                      ? "text-red-600"
                      : "text-textLightColor"
                  }`}
                >
                  {applicationInfo.status}
                </span>
              </p>
              <p className="text-base text-textLightColor font-medium py-1.5">
                National ID:
                <span className="text-textDarkColor font-light px-5">
                  {applicationInfo.baseInformation.nationalId}
                </span>
              </p>
              <p className="text-base text-textLightColor font-medium py-1.5">
                Driver License:
                <span className="text-textDarkColor font-light px-5">
                  {applicationInfo.baseInformation.driverLicenseId}
                </span>
              </p>
            </div>
            {selectedDocument && (
              <BaseModel
                title={selectedDocument.name}
                onClose={() => setSelectedDocument(null)}
                containerStyle="w-5/6"
              >
                <div className="p-1.5" style={{ height: "80vh" }}>
                  {selectedDocument.type === "document" ? (
                    <object
                      data={selectedDocument.url}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                    ></object>
                  ) : (
                    <Image
                      className="w-full h-96 cursor-pointer bg-textLightColor object-cover rounded-sm"
                      loader={() => selectedDocument.url}
                      src={selectedDocument.url}
                      alt="Applicant photo"
                      height={100}
                      width={100}
                      unoptimized
                    />
                  )}
                </div>
              </BaseModel>
            )}

            <h2 className="text-xl py-5">Documents</h2>
            <div className="flex flex-row flex-wrap">
              {Object.values(applicationInfo.documents).map((document: any) => (
                <PillComponent
                  key={document.name}
                  text={`${document.name.substring(0, 30)}...(${
                    document.type
                  })`}
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
              {applicationInfo.onboardingPlan.courses.map((plan: any) => (
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
                  {courses.length > 0 && searchedCourse.length > 0 && (
                    <BaseCard>
                      {courses.map((course, index) => (
                        <div key={course.id}>
                          <div
                            className={`px-1.5 cursor-pointer hover:bg-primary/25 ${
                              index === 0 && "rounded-t-lg"
                            }`}
                            onClick={() => handleSubmitOnboardingCourse(course)}
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
                  disabled={applicationInfo.status === "ready"}
                  className="px-16 h-16 text-primary border border-primary hover:bg-successGreen hover:text-white hover:border-none focus:outline-none font-medium rounded-xl text-base text-center py-3 disabled:bg-borderColorLight disabled:border-borderColorLight disabled:text-textDarkColor"
                >
                  {applicationInfo.status === "pending"
                    ? "Mark Ready for Approval"
                    : `Application is ${applicationInfo.status}`}
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
                  onClick={() => handleSecondaryBtn("reject")}
                  className="px-10 py-3 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white hover:border-none focus:outline-none font-medium rounded-xl text-base text-center"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </BaseCard>
  );
};

export default isAuth(Application);
