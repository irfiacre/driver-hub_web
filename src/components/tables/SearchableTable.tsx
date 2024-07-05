/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "../cards/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Image from "next/image";
import Pagination from "./Pagination";
import Link from "next/link";

const SearchableTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, updateTableData] = useState(data);

  useEffect(() => {
    updateTableData(
      data.filter((item) =>
        searchText.trim() === ""
          ? item
          : item.applicant
              .toLowerCase()
              .includes(searchText.trim().toLowerCase())
      )
    );
  }, [data, searchText]);

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
      <div className="py-2.5 text-primary text-base">Applications</div>
      <hr />
      <div>
        {tableData.map((item) => (
          <div key={item.id}>
            <Link href={`/applications/${item.id}`}>
              <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-3.5 cursor-pointer hover:bg-primary_3">
                <div className="overflow-hidden">
                  {/* <Image
                    className="rounded-full cursor-pointer"
                    loader={() => item.baseInformation.passportPhotoUrl}
                    src={item.baseInformation.passportPhotoUrl}
                    alt="Rounded avatar"
                    height={80}
                    width={80}
                    unoptimized
                  /> */}
                  <img
                    src={item.baseInformation.passportPhotoUrl}
                    alt="Thumbnail"
                    height={"80px"}
                    width={"80px"}
                    className="rounded-full cursor-pointer h-20 w-20 object-cover"
                  />
                </div>
                <div className="text-sm">
                  <div className="flex flex-row align-middle items-center gap-2 py-1.5">
                    <span className="font-semibold">
                      {item.applicant.firstName + " " + item.applicant.lastName}
                    </span>

                    <span
                      className={`font-light text-xs ${
                        item.status === "approved"
                          ? "text-successGreen"
                          : item.status === "rejected"
                          ? "text-red-600"
                          : "text-textLightColor"
                      }`}
                    >
                      ({item.status})
                    </span>
                  </div>
                  <span className="text-textLightColor font-light">
                    National ID: {item.baseInformation.nationalId}
                  </span>
                  <br />
                  <span className="text-textLightColor font-light">
                    Driver License: {item.baseInformation.driverLicenseId}
                  </span>
                </div>
                <div></div>
              </div>

              <hr />
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="w-full py-10">
        <Pagination prevPage={1} currentPage={1} nextPage={3} totalPages={5} />
      </div> */}
    </BaseCard>
  );
};

export default SearchableTable;
