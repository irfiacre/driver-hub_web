import React from "react";

interface InputProps {
  label: string;
  value: string;
  error: string | null;
  placeholder?: string;
  required?: boolean;
}

const BaseInput = ({
  label,
  value,
  error,
  required,
  placeholder,
}: InputProps) => {
  const inputID = label ? label.split(" ").join("_").toLowerCase() : "no_label";

  return (
    <div className="w-full my-3">
      <label
        htmlFor={inputID}
        className="block mb-2 text-sm text-textDarkColor font-bold"
      >
        {label}
      </label>
      <input
        type="text"
        id={inputID}
        className="bg-backgroundColor border border-borderColorLight text-md rounded-md focus:bg-borderColorLight focus:border-borderColorLight block w-full p-2 h-16"
        placeholder={`Enter ${placeholder || ""}`}
        required={required || true}
        value={value}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default BaseInput;
