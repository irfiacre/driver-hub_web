"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "../cards/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Pagination from "./Pagination";
import Link from "next/link";
import BaseModel from "../models/BaseModel";
import CreateOnboardingPlan from "@/src/views/forms/CreateOnboardingPlan";
import { Icon } from "@iconify/react";
import { generateId } from "@/util/helpers";
import {
  createDocEntry,
  deleteDocEntryById,
  updateDocEntry,
} from "@/services/firebase/helpers";
import { PLANS_COLLECTION } from "@/constants/collectionNames";
import { toast } from "react-toastify";

const OnboardingPlansTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, updateTableData] = useState(data);
  const [openModel, setOpenCourseModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [editValues, setEditValues] = useState({
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    updateTableData(
      data.filter((item) =>
        searchText.trim() === ""
          ? item
          : item.title.toLowerCase().includes(searchText.trim().toLowerCase())
      )
    );
  }, [data, searchText]);

  const handleSidebarSearch = (e: any) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleCreatePlan = async (planObj: "create" | any) => {
    if (planObj === "create") {
      setOpenCourseModel(true);
    } else {
      setLoading(true);
      const planFormat = editValues.title
        ? {
            ...editValues,
            title: planObj.title,
            description: planObj.description,
          }
        : {
            ...planObj,
            id: generateId(planObj.title),
            status: "pending",
            createdAt: new Date().toISOString(),
            courses: [],
          };

      const planAdded = editValues.title
        ? await updateDocEntry(PLANS_COLLECTION, planFormat.id, planFormat)
        : await createDocEntry(PLANS_COLLECTION, planFormat);
      if (planAdded) {
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

  const handleEditPlan = (plan: any) => {
    setOpenCourseModel(true);
    setEditValues({
      title: plan.title,
      description: plan.description,
      id: plan.id,
    });
  };

  const handleDelete = async (plan: any) => {
    const deleted = await deleteDocEntryById(PLANS_COLLECTION, plan.id);
    if (deleted) {
      toast.success(`${plan.title} is Deleted`, {
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
            editValues.title ? `Edit (${editValues.title})` : "Create Plan"
          }
          onClose={handleCloseModel}
          containerStyle="w-4/5 p-10"
        >
          <div className="">
            <CreateOnboardingPlan
              onFormSubmit={handleCreatePlan}
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
          onClick={() => handleCreatePlan("create")}
          className="h-12 text-white bg-primary hover:bg-primaryDark focus:outline-none font-medium rounded-lg text-md text-center px-4"
        >
          Create New
        </button>
      </div>
      <div className="py-2.5 text-textLightColor text-base font-semibold flex flex-row align-middle items-center px-1.5 gap-3.5 cursor-pointer bg-backgroundColor">
        <span className="w-full">Title</span>
        <span className="w-2/4">Courses</span>
        <span className="w-full">Description</span>
        <span className="w-2/4">Actions</span>
      </div>
      <hr />
      <div>
        {tableData.map((item) => {
          console.log("========", item.onboardingPlan);

          return (
            <div key={item.applicant}>
              <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-1.5 cursor-pointer hover:bg-backgroundColor">
                <div className="w-full">
                  <Link href={`/plans/${item.id}`}>
                    <span>{item.title}</span>
                  </Link>
                </div>
                <div className="w-2/4">
                  <Link href={`/plans/${item.id}`}>
                    <span>{item.onboardingPlan?.courses.length || 0}</span>
                  </Link>
                </div>
                <div className="text-sm w-full">
                  <Link href={`/plans/${item.id}`}>
                    <span className="text-textLightColor font-light">
                      {item.description.substring(0, 50)}
                    </span>
                  </Link>
                </div>
                <div className="w-2/4">
                  <button
                    className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-textLightColor bg-inherit rounded-full hover:bg-textDarkColor hover:text-white focus:outline-none"
                    type="button"
                    onClick={() => handleEditPlan(item)}
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
          );
        })}
      </div>
      <div className="w-full py-10">
        <Pagination prevPage={1} currentPage={1} nextPage={3} totalPages={1} />
      </div>
    </BaseCard>
  );
};

export default OnboardingPlansTable;
