import React from "react";

interface InputProps {
  inputID: string;
  value: string;
  onInputChange: (e: any) => void;
  inputClassName?: string;
  onIconClick: () => void;
}

const IconInput = ({
  inputID,
  value,
  onInputChange,
  onIconClick,
  inputClassName,
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
          className={`block w-full p-4 ps-10 h-12 bg-backgroundColor border border-borderColorLight focus:bg-backgroundColor2 focus:border-borderColorLight text-md focus:outline-none ${inputClassName}`}
          placeholder="Enter text"
          value={value}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="bg-primary text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
          onClick={onIconClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default IconInput;
