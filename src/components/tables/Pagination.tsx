import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface PaginationProps {
  currentPage: number;
  prevPage: number;
  nextPage: number;
  totalPages: number;
}

const Pagination = ({
  prevPage,
  currentPage,
  nextPage,
  totalPages,
}: PaginationProps) => {
  const handleClickNext = () => {
    console.log("Next!!");
  };
  const handleClickPrev = () => {
    console.log("Next!!");
  };
  return (
    <div className="flex items-center gap-4 w-full justify-center ">
      <button
        className="flex items-center text-textLightColor gap-2 px-6 py-3 text-xs font-medium text-center uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        disabled={currentPage === 1}
        onClick={() => handleClickPrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
        Previous
      </button>
      <div className="flex items-center gap-2">
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-primary text-center align-middle text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {currentPage}
          </span>
        </button>
      </div>
      <button
        className="flex items-center gap-2 px-6 py-3 text-xs font-medium text-center text-textLightColor uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => handleClickNext()}
        disabled={currentPage === totalPages}
      >
        Next{"  "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
