"use client";
import React, { useState } from "react";
import BaseInput from "../../components/inputs/BaseInput";

interface CreateUserState {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  cooperative: string;
}

const CreateUser = ({
  defaultTitle,
  defaultDescription,
  onFormSubmit,
}: {
  defaultTitle?: string;
  defaultDescription?: string;
  onFormSubmit: (obj: CreateUserState) => void;
}) => {
  const [state, setState] = useState<CreateUserState>({
    first_name: "",
    last_name: "",
    email: "",
    role: "officer",
    cooperative: "",
  });

  const handleInputChange = (e: any) => {
    e.preventDefault();

    setState((prevState: any) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    onFormSubmit(state);
  };
  return (
    <form className="w-full">
      <div>
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <BaseInput
              label="First Name"
              value={state.first_name}
              placeholder="First Name"
              onInputChange={handleInputChange}
              disabled={!!defaultTitle}
            />
          </div>
          <div className="w-full">
            <BaseInput
              label="Last Name"
              value={state.last_name}
              placeholder="Last Name"
              onInputChange={handleInputChange}
              disabled={!!defaultTitle}
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <BaseInput
              label="Email"
              value={state.email}
              placeholder="Email"
              onInputChange={handleInputChange}
              disabled={!!defaultTitle}
            />
          </div>

          <div className="w-full p-3.5">
            <label
              htmlFor="role"
              className="block mb-2 text-base text-textDarkColor font-bold"
            >
              Choose Role
            </label>
            <select
              id="role"
              className="block w-full p-2 h-14 bg-backgroundColor border border-borderColorLight focus:bg-white focus:border-borderColorLight text-md rounded-md  focus:outline-none disabled:bg-backgroundColor2"
              onChange={handleInputChange}
            >
              <option value="officer">Officer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <BaseInput
          label="Cooperative"
          value={state.cooperative}
          placeholder="Cooperative (Optional)"
          onInputChange={handleInputChange}
          disabled={!!defaultTitle}
        />
      </div>
      <div className="p-3.5">
        <button
          type="submit"
          onClick={handleSubmitForm}
          className="w-full h-16 text-white bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-3"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
