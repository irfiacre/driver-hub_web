import React from "react";
import { Icon } from "@iconify/react";

const Course = ({
  title,
  duration,
  progress,
  hasAttachement,
}: {
  title: String;
  duration: number;
  progress?: number;
  hasAttachement?: boolean;
}) => {
  const completed = progress ? progress === 100 : false;
  return (
    <div
      className={`${
        (progress || hasAttachement) && "flex flex-row justify-between"
      } p-1.5 ${completed ? "text-textLightColor" : "text-textDarkColor"}`}
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
      {hasAttachement && (
        <div className="py-4 text-borderColorLight">
          <Icon icon="teenyicons:attach-outline" fontSize={18} />
        </div>
      )}
    </div>
  );
};

export default Course;
