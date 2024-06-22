import React from "react";

interface InputProps {
  label: string;
  value: string;
  error?: string | null;
  placeholder?: string;
  required?: boolean;
  onInputChange: (e: any) => void;
  disabled?: boolean;
}

const BaseInput = ({
  label,
  value,
  error,
  required,
  placeholder,
  onInputChange,
  disabled,
}: InputProps) => {
  const inputID = label ? label.split(" ").join("_").toLowerCase() : "no_label";
  const inputType = inputID.includes("email")
    ? "email"
    : inputID.includes("password")
    ? "password"
    : "text";
  return (
    <div className="p-3.5">
      <label
        htmlFor={inputID}
        className={`block mb-2 ${
          error ? "text-red-500" : "text-textDarkColor"
        } font-bold`}
      >
        {label}
      </label>
      <input
        type={inputType}
        id={inputID}
        className={`block w-full p-2 h-14 ${
          error
            ? "bg-red-50 border border-red-500 text-red-900"
            : "bg-backgroundColor border border-borderColorLight focus:bg-white focus:border-borderColorLight"
        } text-md rounded-md  focus:outline-none disabled:bg-backgroundColor2`}
        placeholder={`Enter ${placeholder || ""}`}
        required={required || true}
        value={value}
        onChange={onInputChange}
        disabled={disabled}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default BaseInput;
