"use client";
import React, { useState } from "react";
import BaseInput from "../../components/inputs/BaseInput";
import { PulseLoader } from "react-spinners";

interface CreateOnboardingPlanState {
  title: string;
  description: string;
}

const CreateOnboardingPlan = ({
  defaultTitle,
  defaultDescription,
  onFormSubmit,
  loading,
}: {
  defaultTitle?: string;
  defaultDescription?: string;
  onFormSubmit: (obj: CreateOnboardingPlanState) => void;
  loading?: boolean;
}) => {
  const [state, setState] = useState<CreateOnboardingPlanState>({
    title: defaultTitle || "",
    description: defaultDescription || "",
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
        <BaseInput
          label="Title"
          value={state.title}
          placeholder="Title"
          onInputChange={handleInputChange}
          disabled={!!defaultTitle}
        />
        <div className="p-3.5">
          <label
            htmlFor="description"
            className="block mb-2 text-textDarkColor font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={2}
            className={`block w-full p-2 h-14 bg-backgroundColor border border-borderColorLight focus:bg-white focus:border-borderColorLight text-md rounded-md  focus:outline-none`}
            placeholder="Description"
            value={state.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
      <div className="p-3.5">
        <button
          type="submit"
          onClick={handleSubmitForm}
          className="w-full h-16 text-white bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-3 disabled:bg-borderColorLight"
          disabled={loading}
        >
          {loading ? (
            <PulseLoader
              color={"#ffffff"}
              loading={loading}
              size={10}
              cssOverride={{ width: "100%" }}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={0.5}
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateOnboardingPlan;
