import React from "react";

const PillComponent = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick?: () => void;
}) => {
  return (
    <div
      onClick={handleClick}
      className="border border-primary/50 bg-primary/40 py-2.5 px-5 m-1  rounded-full text-center cursor-pointer hover:bg-primary/20 capitalize"
    >
      {text}
    </div>
  );
};

export default PillComponent;
