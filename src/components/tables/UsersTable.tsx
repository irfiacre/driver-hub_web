"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "../cards/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Image from "next/image";
import Pagination from "./Pagination";
import Link from "next/link";
import CreateUser from "@/src/views/forms/CreateUser";
import BaseModel from "../models/BaseModel";

const UsersTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, updateTableData] = useState(data);
  const [openModel, setOnboardingPlan] = useState<boolean>(true);
  const [editValues, setEditValues] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    updateTableData(
      data.filter((item) =>
        searchText.trim() === ""
          ? item
          : item.firstName
              .toLowerCase()
              .includes(searchText.trim().toLowerCase())
      )
    );
  }, [data, searchText]);

  const handleSidebarSearch = (e: any) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleCloseModel = () => {
    setOnboardingPlan(false);
    setEditValues({
      title: "",
      description: "",
    });
  };

  const handleCreatePlan = (obj: "create" | any) => {
    if (obj === "create") {
      setOnboardingPlan(true);
    } else {
      console.log("Should submit the entered values", obj);
      handleCloseModel();
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
      <div>
        {openModel && (
          <BaseModel
            title={
              editValues.title ? `Edit (${editValues.title})` : "Create Plan"
            }
            onClose={() => console.log("onClose")}
            containerStyle="w-4/5 p-10"
          >
            <div className="">
              <CreateUser
                onFormSubmit={handleCreatePlan}
                defaultDescription={editValues.description}
                defaultTitle={editValues.title}
              />
            </div>
          </BaseModel>
        )}
        <div className="py-5 text-textLightColor flex flex-row justify-between items-center">
          <div className="py-2.5 text-primary text-base">Staff Users</div>
          <button
            type="button"
            onClick={() => handleCreatePlan("create")}
            className="h-12 text-white bg-primary hover:bg-primaryDark focus:outline-none font-medium rounded-lg text-md text-center px-4"
          >
            Create New
          </button>
        </div>
      </div>

      <hr />
      <div>
        {tableData.map((item, index) => (
          <div key={item.applicant}>
            <Link href={`#`}>
              <div className="flex flex-row justify-between items-center py-2.5 px-1.5 gap-3.5 cursor-pointer hover:bg-primary_3">
                {/*  <div className="">
                  <Image
                    className="rounded-full cursor-pointer"
                    loader={() => item.photoUrl}
                    src={item.photoUrl}
                    alt="Rounded avatar"
                    height={70}
                    width={70}
                    unoptimized
                  /> 
                </div>*/}
                <div className="text-sm">
                  <span className="text-textLightColor font-light">
                    {item.firstName}
                  </span>{" "}
                  <span className="text-textLightColor font-light">
                    {item.lastName}
                  </span>
                </div>
                <div>
                  <span
                    className={`font-light text-xs ${
                      item.role === "admin"
                        ? "text-successGreen"
                        : item.status === "Rejected"
                        ? "text-red-600"
                        : "text-textLightColor"
                    }`}
                  >
                    {item.role}
                  </span>
                </div>
              </div>

              <hr />
            </Link>
          </div>
        ))}
      </div>
      <div className="w-full py-10">
        <Pagination prevPage={1} currentPage={2} nextPage={3} totalPages={5} />
      </div>
    </BaseCard>
  );
};

export default UsersTable;
