import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface ApplicantProgressProps {
  photoUrl: string;
  name: string;
  progress: string;
}

const ApplicantProgress = ({
  photoUrl,
  name,
  progress,
}: ApplicantProgressProps) => {
  return (
    <div className="cursor-pointer flex flex-row items-center gap-3 justify-start hover:bg-primary/5 py-2.5">
      <Image
        className="rounded-full w-12 h-12 bg-textLightColor"
        loader={() => photoUrl}
        src={photoUrl}
        alt="Applicant photo"
        height={100}
        width={100}
        unoptimized
      />
      <div>
        <p className="text-textDarkColor/80 text-base font-medium">{name}</p>
        <p className="text-sm font-light text-textLightColor text-wrap">
          {progress.substring(0, 20)}
        </p>
      </div>
    </div>
  );
};

export default ApplicantProgress;
