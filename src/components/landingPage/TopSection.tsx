"use client";
import React from "react";
import dynamic from "next/dynamic";
import LogoIcon from "../logo/LogoIcon";
import { Icon } from "@iconify/react/dist/iconify.js";
import animationData from "../../../public/assets/car_animation.json";
import { useRouter } from "next/navigation";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const TopSection = () => {
  const router = useRouter();

  const handleBtnClicked = (condition: string) => {
    console.log("btn click");
    if (condition === "login") {
      router.push("/dashboard");
    } else {
      console.log("Send User to Download App Page");
    }
  };

  return (
    <section className="px-36 py-5 space-y-5 bg-primary/5 max-md:px-5">
      <div className="flex flex-row items-center justify-between">
        <div>
          <LogoIcon size={26} />
        </div>
        <div className="flex flex-row items-center justify-end gap-5">
          <button
            type="button"
            onClick={() => handleBtnClicked("join")}
            className="capitalize text-primary bg-white hover:text-white hover:bg-primary focus:outline-none  font-medium rounded-md text-md text-center py-2.5 px-5"
          >
            join as a driver
          </button>
          <button
            type="button"
            onClick={() => handleBtnClicked("login")}
            className="capitalize text-white bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-2.5 px-5 disabled:bg-borderColorLight"
          >
            Login
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pt-24 max-md:flex-wrap">
        <div className="space-y-5">
          <div>
            <span className="text-textDarkColor text-8xl font-semibold max-md:text-5xl">
              Welcome to
            </span>
            <br />
            <span className="text-primary text-7xl font-semibold max-md:text-4xl">
              Driver Hub
            </span>
          </div>
          <p className="text-textLightColor">
            Want to join as a driver ? Download our App here
          </p>
          <div className="flex flex-row items-center justify-start gap-10">
            <a
              href="https://expo.dev/accounts/irfiacre/projects/driverhub"
              target="_blank"
            >
              <Icon
                icon="iconoir:app-store-solid"
                fontSize={50}
                className="text-primary cursor-pointer"
              />
            </a>
            <a
              href="https://expo.dev/accounts/irfiacre/projects/driverhub"
              target="_blank"
            >
              <Icon
                icon="simple-icons:googleplay"
                fontSize={40}
                className="text-primary cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="max-md:pt-10">
          <Lottie
            animationData={animationData}
            height={"100%"}
            width={"100%"}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
