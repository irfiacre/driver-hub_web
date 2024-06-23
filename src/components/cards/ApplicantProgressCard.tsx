import Image from "next/image";
import React from "react";
import Course from "../Course";

const ApplicantProgressCard = ({
  photoUrl,
  name,
  overAllProgress,
  onboardingCourses,
  statistics,
}: {
  photoUrl: string;
  name: string;
  overAllProgress: number;
  onboardingCourses: Array<any>;
  statistics: any;
}) => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <div className="pb-3.5 px-1.5 flex flex-row justify-start items-center gap-5">
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
              <span className="">{overAllProgress}% Completed</span>
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <div className="text-textLightColor py-2 px-1.5">
          <u> Onboarding Progress in Detail </u>
        </div>

        {onboardingCourses.map((course) => (
          <div key={course.id}>
            <Course
              title={course.title}
              duration={course.duration}
              progress={course.progress}
            />
            <hr />
          </div>
        ))}
      </div>

      <div className="px-1.5">
        <h1 className="text-textLightColor text-sm">Progress</h1>
        <div className="my-3 w-full bg-progressBarBackgroundColor rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full"
            style={{ width: `${overAllProgress}%` }}
          ></div>
        </div>
      </div>

      <div>
        <div className="flex flex-row justify-between p-1.5 mb-5">
          <h1 className="text-lg font-medium">Statistics</h1>
          <span className="text-textLightColor font-light">Just Now</span>
        </div>
        {statistics.map((item: any) => (
          <div key={item.title}>
            <div className="flex flex-row justify-between p-1.5">
              <h1 className="font-medium">{item.title}</h1>
              <span className="text-textLightColor">{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantProgressCard;
