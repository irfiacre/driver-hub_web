import Image from "next/image";
import React from "react";

const ApplicantProgressCard = ({
  photoUrl,
  name,
}: {
  photoUrl: string;
  name: string;
}) => {
  return (
    <div>
      <div className=" py-3.5 flex flex-row justify-start items-center gap-5">
        <div>
          <Image
            className="rounded-full w-16 bg-textLightColor border border-borderColorLight"
            loader={() => photoUrl}
            src={photoUrl}
            alt="Applicant photo"
            height={100}
            width={100}
            unoptimized
          />
        </div>
        <div>
          <p className="text-textLightColor text-lg font-medium">{name}</p>
          <p className="text-sm text-textLightColor font-extralight">
            <span className="">80% Completed</span>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ApplicantProgressCard;
