"use client";
import React from "react";
import BaseCard from "../cards/BaseCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const FourthSection = () => {
  const testimonies = [
    {
      image: "https://i.pravatar.cc/450?u=12",
      name: "UWAMAHORO Jeanine",
      text: "I was initially nervous about switching to a new cab company, but Yego Innovision's onboarding process put all my worries to rest. It was straightforward, efficient, and tailored to meet my needs. The training and resources provided have equipped me with everything I need to excel. I’m proud to be part of a company that prioritizes the success and satisfaction of its drivers.",
    },
    {
      image: "https://i.pravatar.cc/450",
      name: "Kalisa James",
      text: "Joining Yego Innovision has been a game-changer for my career. The seamless onboarding process made it incredibly easy to get started. From the moment I signed up, the support team guided me through every step, ensuring I was well-prepared to hit the road. Now, I can focus on providing the best service to my passengers, knowing that I’m backed by a company that values its drivers.",
    },
    {
      image: "https://i.pravatar.cc/450",
      name: "RUKUNDO Jean De Dieu",
      text: "Joining Yego Innovision has been a wonderful experience. The onboarding process was smooth and well-organized, allowing me to quickly get acquainted with the system and start working. The company's commitment to supporting its drivers is evident in every aspect of the onboarding experience. I’m excited to be driving with Yego Innovision and confident that this partnership will lead to great success.",
    },
  ];
  return (
    <section className="px-36 py-10 align-middle space-y-10 bg-white max-md:px-5">
      <div className="space-y-5 text-center">
        <span className="text-textDarkColor text-5xl font-normal max-md:text-3xl">
          Testimonies
        </span>
      </div>
      <div className="flex flex-row items-center justify-between gap-10 max-md:flex-wrap">
        <div className="w-full">
          <Image
            className="rounded-md w-80 bg-textLightColor max-md:w-50"
            loader={() => testimonies[0].image}
            src={testimonies[0].image}
            alt={`${testimonies[0].name}`}
            height={100}
            width={100}
            unoptimized
          />
        </div>
        <div className="space-y-5">
          <p className="text-textDarkColor text-xl max-md:text-justify">
            {testimonies[0].text}
          </p>
          <p className="text-primary text-2xl">{testimonies[0].name}</p>
          <p className="text-textLightColor text-sm">Joined since in 2023</p>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
