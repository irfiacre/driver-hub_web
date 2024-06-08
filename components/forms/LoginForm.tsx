import React from "react";
import BaseInput from "../inputs/BaseInput";
import BaseButton from "../buttons/BaseButton";

const LoginForm = () => {
  return (
    <form className="w-full">
      <div className="w-full">
        <BaseInput label="Email" value={""} error={null} placeholder="Email" />

        <BaseInput
          label="Password"
          value={""}
          error={null}
          placeholder="Password"
        />
      </div>
      <div>
        <BaseButton />
      </div>
    </form>
  );
};

export default LoginForm;
