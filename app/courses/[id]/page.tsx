"use client";
import React, { useEffect, useState } from "react";
import { COURSES_ARRAY } from "@/constants/fixtures";
import Course from "@/src/components/Course";
import BaseCard from "@/src/components/cards/BaseCard";
import SearchableInput from "@/src/components/inputs/SearchInput";
import { Icon } from "@iconify/react";
import { formatDate } from "@/util/helpers";
import isAuth from "@/src/components/isAuth";
import { useParams, useRouter } from "next/navigation";
import {
  subscribeToDocument,
  updateDocEntry,
} from "@/services/firebase/helpers";
import { COURSES_COLLECTION } from "@/constants/collectionNames";
import AddMaterial from "@/src/components/course/AddMaterial";
import CourseMaterial from "@/src/components/course/CourseMaterial";
import { toast } from "react-toastify";
import Loading from "@/src/components/LoadingComponent";

const CourseDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMaterial, setSelectedMaterial] = useState({});
  const [course, setCourse] = useState<any>({});

  const handleOnUpdateData = (newChanges: any) => {
    setCourse(newChanges);
    setLoading(false);
  };
  useEffect(() => {
    return () =>
      subscribeToDocument(
        COURSES_COLLECTION,
        handleOnUpdateData,
        params.id.toLocaleString()
      );
  }, [params.id]);

  const handleSubmitMaterial = async (materialData: any) => {
    const newCourseInfo = {
      ...course,
      materials: course.materials
        ? [...course.materials, materialData]
        : [materialData],
    };
    const courseUpdated = await updateDocEntry(
      COURSES_COLLECTION,
      params.id.toLocaleString(),
      newCourseInfo
    );
    if (courseUpdated) {
      toast.success("Material Added Successfully", {
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 3000,
      });
    }
  };
  const handleMaterialClick = (material: any) => setSelectedMaterial(material);

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
      <BaseCard className="px-10 py-10 ">
        {!course.title ? (
          <Loading />
        ) : (
          <div className="flex flex-row max-md:flex-col max-md:divide-y-2 md:divide-x-2 text-textDarkColor">
            <div className="w-3/5 pr-5 max-md:w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-semibold text-textDarkColor">
                    {course.title}
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
                Created: {formatDate(course?.createdAt)}
              </span>
              <p className="text-sm text-textLightColor py-5">
                {course.description}
              </p>
              <div>
                <span className="text-base text-textLightColor font-semibold">
                  Materials
                </span>
              </div>
              <div className="py-5">
                <CourseMaterial
                  handleMaterialClicked={handleMaterialClick}
                  data={course.materials || []}
                />
              </div>
            </div>
            <div className="w-full">
              <AddMaterial
                handleSubmitMaterial={handleSubmitMaterial}
                courseId={params.id.toLocaleString()}
                selectedMaterial={selectedMaterial}
              />
            </div>
          </div>
        )}
      </BaseCard>
    </div>
  );
};

export default isAuth(CourseDetails);
