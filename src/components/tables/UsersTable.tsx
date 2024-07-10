"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "../cards/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Image from "next/image";
import Pagination from "./Pagination";
import Link from "next/link";
import CreateUser from "@/src/views/forms/CreateUser";
import BaseModel from "../models/BaseModel";
import { addUser } from "@/services/firebase/authentication";
import { DEFAULT_PASSWORD, USER_DOC_ID } from "@/constants/fixtures";
import { createDocEntry } from "@/services/firebase/helpers";
import { STAFF_COLLECTION_NAME } from "@/constants/collectionNames";
import { Flip, toast } from "react-toastify";

const UsersTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, updateTableData] = useState(data);
  const [openModel, setOnboardingPlan] = useState<boolean>(false);

  const sendConfirmationEmail = async (email: string) => {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        subject: "Welcome to Driver Hub",
        message: `
        <p>Warm welcome to Driver Hub platform, we are excited to have you ;)</p>
        <div>
        <h3>Your Credentials are:</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Password:</strong> ${DEFAULT_PASSWORD}</p>
        </div>
        `,
        title: "Welcome to Driver Hub",
      }),
    });

    const result = await res.json();

    if (result.success) {
      return true;
    } else {
      return false;
    }
  };
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

  const handleCloseModel = () => setOnboardingPlan(false);

  const handleCreatePlan = async (obj: "create" | any) => {
    if (obj === "create") {
      setOnboardingPlan(true);
    } else {
      const user = await addUser(obj.email, DEFAULT_PASSWORD);
      const staffFormat = {
        id: USER_DOC_ID,
        userId: user.uid,
        firstName: obj.first_name,
        lastName: obj.last_name,
        role: obj.role,
        cooperative: obj.cooperative,
      };

      const staffAdded = await createDocEntry(
        STAFF_COLLECTION_NAME,
        staffFormat
      );

      if (staffAdded) {
        const result = await sendConfirmationEmail(obj.email);
        toast.success("User Created", {
          hideProgressBar: true,
          closeOnClick: true,
          transition: Flip,
          autoClose: 3000,
        });
      }

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
            title="Add New User"
            onClose={handleCloseModel}
            containerStyle="w-4/5 p-10"
          >
            <div className="">
              <CreateUser onFormSubmit={handleCreatePlan} />
            </div>
          </BaseModel>
        )}
        <div className="py-5 text-textLightColor flex flex-row justify-between items-center">
          <div className="py-2.5 text-primary text-base">
            Users (Admins & Officers)
          </div>
          <button
            type="button"
            onClick={() => handleCreatePlan("create")}
            className="h-12 text-white bg-primary hover:bg-primaryDark focus:outline-none font-medium rounded-lg text-md text-center px-4"
          >
            Add New User
          </button>
        </div>
      </div>

      <hr />
      <div>
        {tableData.map((item) => (
          <div key={`${item.firstName}-${item.lastName}`}>
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
    </BaseCard>
  );
};

export default UsersTable;
