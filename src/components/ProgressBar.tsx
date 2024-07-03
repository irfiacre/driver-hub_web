import React from "react";

const ProgressBar = ({
  progress,
  noTitle,
}: {
  progress: number;
  noTitle?: boolean;
}) => {
  return (
    <div>
      {!noTitle && <h1 className="text-textLightColor text-sm">Progress</h1>}
      <div className="flex flex-row justify-between items-center gap-5">
        <div className="my-3 w-full bg-progressBarBackgroundColor rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-textLightColor text-xs">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
