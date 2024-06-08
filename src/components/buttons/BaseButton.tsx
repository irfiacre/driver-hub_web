import React from "react";

const BaseButton = ({ handleSubmit }: { handleSubmit: (e: any) => void }) => {
  return (
    <div className="p-3.5">
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full h-16 text-white bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-3"
      >
        Login
      </button>
    </div>
  );
};

export default BaseButton;
