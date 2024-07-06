/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Course from "../Course";
import ProgressBar from "../ProgressBar";

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
            <img
              src={photoUrl}
              alt="Thumbnail"
              height={"100px"}
              width={"100px"}
              className="rounded-full bg-textLightColor border border-borderColorLight object-cover"
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
              // duration To be added
              title={course.title}
              duration={
                course.duration
                  ? course.duration
                  : Math.round(Math.random() * 50)
              }
              progress={course.progress}
            />
            <hr />
          </div>
        ))}
      </div>

      <div className="px-1.5">
        <ProgressBar progress={overAllProgress} />
      </div>

      <div>
        <div className="flex flex-row justify-between p-1.5 mb-5">
          <h1 className="text-lg font-medium">Statistics</h1>
          <span className="text-textLightColor font-light">Just Now</span>
        </div>

        <div>
          <div className="flex flex-row justify-between p-1.5">
            <h1 className="font-medium">Finished Courses:</h1>
            <span className="text-textLightColor">
              {statistics.finishedCourses}
            </span>
          </div>
        </div>

        <div>
          <div className="flex flex-row justify-between p-1.5">
            <h1 className="font-medium">Unfinished Courses:</h1>
            <span className="text-textLightColor">
              {statistics.totalCourses - statistics.finishedCourses}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProgressCard;
