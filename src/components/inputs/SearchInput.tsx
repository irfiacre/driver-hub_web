import React from "react";

interface InputProps {
  inputID: string;
  value: string;
  onInputChange: (e: any) => void;
  inputClassName?: string;
  placeholder?: string;
}

const SearchableInput = ({
  inputID,
  value,
  onInputChange,
  inputClassName,
  placeholder,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={inputID}
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id={inputID}
          className={`block w-full p-4 ps-10 h-12 bg-backgroundColor border border-borderColorLight focus:bg-white focus:border-borderColorLight text-md focus:outline-none ${inputClassName}`}
          placeholder={placeholder || "Search..."}
          value={value}
          onChange={onInputChange}
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchableInput;
