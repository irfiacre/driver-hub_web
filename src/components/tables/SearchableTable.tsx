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
      />
      <div>Applications</div>
      <hr />
      <div>
        {data.map((item) => (
          <div key={item.applicant}>
            <div className="flex flex-row align-middle items-center justify-between">
              <div className="">
                <Image
                  className="rounded-full cursor-pointer hover:border hover:border-borderColorLight"
                  loader={() => item.photoUrl}
                  src={item.photoUrl}
                  alt="Rounded avatar"
                  height={70}
                  width={70}
                  unoptimized
                />
              </div>
              <div>
                <span>{item.description.substring(0, 100)}</span>
                <div className="">
                  <span>{item.applicant}</span>
                  <span>{item.status}</span>
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
