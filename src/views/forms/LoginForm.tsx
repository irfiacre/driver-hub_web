"use client";
import React, { useState } from "react";
import BaseInput from "../../components/inputs/BaseInput";
import LoginButton from "../../components/buttons/LoginButton";
import { emailValidate } from "@/util/helpers";
import { useRouter } from "next/navigation";

interface LoginFormState {
  email: string;
  password: string;
  error?: string | null;
}

const LoginForm = () => {
  const [state, setState] = useState<LoginFormState>({
    email: "",
    password: "",
    error: null,
  });
  const router = useRouter();

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setState((prevState: any) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      error: null,
    }));
  };
  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    const emailValidation = emailValidate(state.email);
    if (emailValidation !== state.email) {
      setState((prevState: any) => ({
        ...prevState,
        error: emailValidation,
      }));
      return;
    }
    const { email, password } = state;
    console.log("--------", email, password);

    router.replace("/dashboard", { scroll: false });
  };
  return (
    <form className="w-3/4">
      <div className="">
        <BaseInput
          label="Email"
          value={state.email}
          error={state.error}
          placeholder="Email"
          onInputChange={handleInputChange}
        />
        <BaseInput
          label="Password"
          value={state.password}
          error={null}
          placeholder="Password"
          onInputChange={handleInputChange}
        />
      </div>
      <p className="py-2 text-textLightColor text-sm text-center hover:cursor-pointer hover:text-primary">
        Forgot Password?
      </p>
      <div>
        <LoginButton handleSubmit={handleSubmitForm} />
      </div>
    </form>
  );
};

export default LoginForm;
