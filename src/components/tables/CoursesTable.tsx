/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "../cards/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Pagination from "./Pagination";
import Link from "next/link";
import BaseModel from "../models/BaseModel";
import CreateOnboardingPlan from "@/src/views/forms/CreateOnboardingPlan";
import { Icon } from "@iconify/react";
import { COURSES_COLLECTION } from "@/constants/collectionNames";
import { toast } from "react-toastify";
import { generateId } from "@/util/helpers";
import {
  createDocEntry,
  deleteDocEntryById,
  updateDocEntry,
} from "@/services/firebase/helpers";

const CoursesTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, updateTableData] = useState(data);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModel, setOpenCourseModel] = useState<boolean>(false);
  const [editValues, setEditValues] = useState({
    title: "",
    description: "",
    id: "",
  });
  const [user, setUser] = useState(null);
  useEffect(() => {
    updateTableData(
      data.filter((item) =>
        searchText.trim() === ""
          ? item
          : item.title.toLowerCase().includes(searchText.trim().toLowerCase())
      )
    );
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, [data, searchText]);

  const handleSidebarSearch = (e: any) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  const handleAddCourse = async (courseObj: "create" | any) => {
    if (courseObj === "create") {
      setOpenCourseModel(true);
    } else {
      setLoading(true);
      const courseFormat = editValues.title
        ? {
            ...editValues,
            title: courseObj.title,
            description: courseObj.description,
          }
        : {
            ...courseObj,
            id: generateId(courseObj.title),
            author: user,
            status: "pending",
            createdAt: new Date().toISOString(),
            materials: [],
          };

      const courseAdded = editValues.title
        ? await updateDocEntry(
            COURSES_COLLECTION,
            courseFormat.id,
            courseFormat
          )
        : await createDocEntry(COURSES_COLLECTION, courseFormat);
      if (courseAdded) {
        toast.success("Course Created", {
          hideProgressBar: true,
          closeOnClick: true,
          autoClose: 3000,
        });
        handleCloseModel();
      }
      setLoading(false);
    }
  };

  const handleCloseModel = () => {
    setOpenCourseModel(false);
    setEditValues({
      title: "",
      description: "",
      id: "",
    });
  };
  const handleEditCourse = (course: any) => {
    setOpenCourseModel(true);
    setEditValues({
      ...course,
      title: course.title,
      description: course.description,
    });
  };
  const handleDelete = async (course: any) => {
    const deleted = await deleteDocEntryById(COURSES_COLLECTION, course.id);
    if (deleted) {
      toast.success(`${course.title} is Deleted`, {
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 3000,
      });
    }
  };
  return (
    <BaseCard className="px-10 py-5">
      <SearchableInput
        inputID="sidebarSearch"
        value={searchText}
        onInputChange={handleSidebarSearch}
        inputClassName="rounded-md"
      />
      {openModel && (
        <BaseModel
          title={
            editValues.title ? `Edit (${editValues.title})` : "Create Course"
          }
          onClose={handleCloseModel}
          containerStyle="w-4/5 p-10"
        >
          <div className="">
            <CreateOnboardingPlan
              onFormSubmit={handleAddCourse}
              defaultDescription={editValues.description}
              defaultTitle={editValues.title}
              loading={loading}
            />
          </div>
        </BaseModel>
      )}
      <div className="py-5 text-textLightColor text-base font-semibold flex flex-row justify-between items-center">
        <span>Total = {data.length}</span>
        <button
          type="button"
          onClick={() => handleAddCourse("create")}
          className="h-12 text-white bg-primary hover:bg-primaryDark focus:outline-none font-medium rounded-lg text-md text-center px-4"
        >
          Add New
        </button>
      </div>
      <div className="py-2.5 text-textLightColor text-base font-semibold flex flex-row align-middle items-center px-1.5 gap-3.5 cursor-pointer bg-backgroundColor">
        <span className="w-full">Title</span>
        <span className="w-full">Description</span>
        <span className="w-2/4">Materials</span>
        <span className="w-2/4">Actions</span>
      </div>
      <hr />
      <div>
        {tableData.map((item) => (
          <div key={item.id}>
            <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-1.5 cursor-pointer hover:bg-backgroundColor">
              <div className="w-full">
                <Link
                  href={`/courses/${item.id}`}
                  className="flex gap-2 items-center"
                >
                  {item.thumbnail?.url ? (
                    <img
                      src={item.thumbnail.url}
                      alt="Thumbnail"
                      height={"80px"}
                      width={"80px"}
                      className="rounded-md"
                    />
                  ) : (
                    ""
                  )}
                  <span>{item.title}</span>
                </Link>
              </div>
              <div className="text-sm w-full">
                <Link href={`/courses/${item.id}`}>
                  <span className="text-textLightColor font-light">
                    {item.description.substring(0, 50)}
                  </span>
                </Link>
              </div>
              <div className="w-2/4">
                <Link href={`/courses/${item.id}`}>
                  <span>{item.courses}</span>
                </Link>
              </div>
              <div className="w-2/4">
                <button
                  className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-textLightColor bg-inherit rounded-full hover:bg-textDarkColor hover:text-white focus:outline-none"
                  type="button"
                  onClick={() => handleEditCourse(item)}
                >
                  <Icon icon="tabler:edit" fontSize={20} />
                </button>{" "}
                <button
                  className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-red-600 bg-inherit rounded-full hover:bg-red-600 hover:text-white focus:outline-none"
                  type="button"
                  onClick={() => handleDelete(item)}
                >
                  <Icon icon="mdi:delete" fontSize={20} />
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="w-full py-10">
        <Pagination prevPage={1} currentPage={2} nextPage={3} totalPages={5} />
      </div>
    </BaseCard>
  );
};

export default CoursesTable;
