import React from "react";

const Course = ({ title, duration }: { title: String; duration: number }) => {
  return (
    <div className="p-1.5">
      <p className="text-sm">{title}</p>
      <span className="text-primary text-xs">{duration} Hours</span>
    </div>
  );
};

export default Course;
