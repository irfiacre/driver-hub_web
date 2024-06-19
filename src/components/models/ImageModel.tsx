import React from "react";
import BaseCard from "../cards/BaseCard";

const ImageModel = ({
  open,
  title,
  imageUrl,
}: {
  open: boolean;
  title: string;
  imageUrl: string;
}) => {
  return (
    <div className="fixed inset-0 bg-modalBackground bg-opacity-50 transition-opacity flex justify-center items-center">
      <BaseCard className="w-6/12 h-1/4">
        <div className="">
          <h1>{title}</h1>
          <button
            type="button"
            className="top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="">image</div>
        <div className="">footer</div>
      </BaseCard>
    </div>
  );
};

export default ImageModel;
