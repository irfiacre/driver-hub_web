"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const TopNav = () => {
  const avatarURL = "https://i.pravatar.cc";
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-primary">Title</h1>
      <div className="flex flex-row gap-3 items-center text-notificationIconColor">
        <div className="">
          <Icon icon="zondicons:notification" fontSize={20} />
        </div>
        <div>|</div>
        <div>Lego Admin</div>
        <div>
          <Image
            className="rounded-full"
            loader={() => avatarURL}
            src={avatarURL}
            alt="Rounded avatar"
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
