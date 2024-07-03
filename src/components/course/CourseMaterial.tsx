import React from "react";
import Course from "../Course";

const CourseMaterial = ({
  data,
  handleMaterialClicked,
}: {
  data: Array<any>;
  handleMaterialClicked: (data: any) => void;
}) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.title}
          className="cursor-pointer hover:bg-backgroundColor max-md:w-full"
          onClick={() => handleMaterialClicked(item)}
        >
          <Course hasAttachement title={item.title} duration={item.duration} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CourseMaterial;
