import React from "react";
import { Icon } from "@iconify/react";

const Course = ({
  title,
  duration,
  progress,
}: {
  title: String;
  duration: number;
  progress?: number;
}) => {
  const completed = progress ? progress === 100 : false;
  return (
    <div
      className={`${progress && "flex flex-row justify-between"} p-1.5 ${
        completed ? "text-textLightColor" : "text-textDarkColor"
      }`}
    >
      <div>
        <p className="text-sm">{title}</p>
        <span className={`${!completed && "text-primary"} text-xs`}>
          {duration} Hours
        </span>
      </div>
      {progress && (
        <div>
          {completed ? (
            <div className="flex flex-row items-end gap-1.5">
              <Icon icon="fluent-mdl2:completed-solid" fontSize={20} />
              <span>completed</span>
            </div>
          ) : (
            <p>{progress}%</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Course;
