import React from "react";
import BaseCard from "../cards/BaseCard";

const BaseModel = ({
  title,
  children,
  containerStyle,
  onClose,
}: {
  title: string;
  children: any;
  onClose: () => void;
  containerStyle?: string;
}) => {
  return (
    <div className="fixed inset-0 bg-modalBackground bg-opacity-50 transition-opacity flex justify-center items-center">
      <div className={containerStyle}>
        {/* sdklsd */}
        <BaseCard className="h-1/4">
          <div className="flex flex-row items-center justify-between p-5">
            <h1 className="text-xl text-textLightColor font-normal capitalize">
              {title}
            </h1>
            <button
              type="button"
              className="top-3 end-2.5 text-gray-400 bg-transparent hover:bg-primary hover:text-white rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              onClick={() => onClose()}
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
          <div>{children}</div>
        </BaseCard>
      </div>
    </div>
  );
};

export default BaseModel;
