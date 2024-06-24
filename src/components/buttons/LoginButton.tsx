import React from "react";
import { ClipLoader, ScaleLoader, PulseLoader } from "react-spinners";

const LoginButton = ({
  handleSubmit,
  loading,
}: {
  handleSubmit: (e: any) => void;
  loading: boolean;
}) => {
  return (
    <div className="p-3.5">
      <button
        type="submit"
        onClick={handleSubmit}
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
          "Login"
        )}
      </button>
    </div>
  );
};

export default LoginButton;
