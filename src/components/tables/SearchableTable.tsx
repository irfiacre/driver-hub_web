"use client";
import React, { useState } from "react";
import BaseCard from "../cards/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Image from "next/image";

const SearchableTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const handleSidebarSearch = (e: any) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  return (
    <BaseCard className="px-10 py-5">
      <SearchableInput
        inputID="sidebarSearch"
        value={searchText}
        onInputChange={handleSidebarSearch}
        inputClassName="rounded-md"
      />
      <div className="py-5 text-primary text-base">Applications</div>
      <hr />
      <div>
        {data.map((item) => (
          <div key={item.applicant}>
            <div className="flex flex-row align-middle items-center justify-between py-2.5 px-1.5 gap-3.5 cursor-pointer hover:bg-primary_3">
              <div className="">
                <Image
                  className="rounded-full cursor-pointer"
                  loader={() => item.photoUrl}
                  src={item.photoUrl}
                  alt="Rounded avatar"
                  height={70}
                  width={70}
                  unoptimized
                />
              </div>
              <div className="text-sm">
                <span className="text-textLightColor font-light">
                  {item.description.substring(0, 100)}
                </span>
                <div className="flex flex-row align-middle items-center gap-2.5 py-1.5">
                  <span className="font-semibold">{item.applicant}</span>
                  <span
                    className={`font-light text-xs ${
                      item.status === "Approved"
                        ? "text-successGreen"
                        : item.status === "Rejected"
                        ? "text-red-600"
                        : "text-textLightColor"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default SearchableTable;
