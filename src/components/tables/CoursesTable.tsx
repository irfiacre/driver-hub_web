"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "../cards/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Pagination from "./Pagination";
import Link from "next/link";
import BaseModel from "../models/BaseModel";
import CreateOnboardingPlan from "@/src/views/forms/CreateOnboardingPlan";
import { Icon } from "@iconify/react";

const CoursesTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, updateTableData] = useState(data);
  const [openModel, setOnboardingPlan] = useState<boolean>(false);
  const [editValues, setEditValues] = useState({
    title: "",
    description: "",
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
  const handleCreatePlan = (obj: "create" | any) => {
    if (obj === "create") {
      setOnboardingPlan(true);
    } else {
      console.log("Should submit the entered values", obj);
      handleCloseModel();
    }
  };

  const handleCloseModel = () => {
    setOnboardingPlan(false);
    setEditValues({
      title: "",
      description: "",
    });
  };
  const handleEditPlan = (plan: any) => {
    setOnboardingPlan(true);
    setEditValues({
      title: plan.title,
      description: plan.description,
    });
  };
  const handleDelete = (plan: any) =>
    console.log("---- should delete plan:", plan);
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
            />
          </div>
        </BaseModel>
      )}
      <div className="py-5 text-textLightColor text-base font-semibold flex flex-row justify-between items-center">
        <span>Total = {data.length}</span>
      </div>
      <div className="py-2.5 text-textLightColor text-base font-semibold flex flex-row align-middle items-center px-1.5 gap-3.5 cursor-pointer bg-backgroundColor">
        <span className="w-full">Title</span>
        <span className="w-full">Description</span>
        <span className="w-2/4">Materials</span>
        <span className="w-2/4">Actions</span>
      </div>
      <hr />
      <div>
        {tableData.map((item, index) => (
          <div key={item.applicant}>
            <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-1.5 cursor-pointer hover:bg-backgroundColor">
              <div className="w-full">
                <Link href={`/plans/${index + 1}`}>
                  <span>{item.title}</span>
                </Link>
              </div>
              <div className="text-sm w-full">
                <Link href={`/plans/${index + 1}`}>
                  <span className="text-textLightColor font-light">
                    {item.description.substring(0, 50)}
                  </span>
                </Link>
              </div>
              <div className="w-2/4">
                <Link href={`/plans/${index + 1}`}>
                  <span>{item.courses}</span>
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
        ))}
      </div>
      <div className="w-full py-10">
        <Pagination prevPage={1} currentPage={2} nextPage={3} totalPages={5} />
      </div>
    </BaseCard>
  );
};

export default CoursesTable;
