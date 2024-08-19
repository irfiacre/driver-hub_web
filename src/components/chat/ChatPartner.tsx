import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface ChatPartnerProps {
  photoUrl: string;
  name: string;
  lastMessage: string;
}

const ChatPartner = ({ photoUrl, name, lastMessage }: ChatPartnerProps) => {
  return (
    <div className="cursor-pointer flex flex-row items-center gap-2 justify-between hover:bg-primary/5 p-4">
      <div className="flex flex-row items-center gap-5 justify-start">
        <Image
          className="rounded-full w-12 h-12 bg-textLightColor object-cover"
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
            {lastMessage.substring(0, 20)} <br />{" "}
            {lastMessage.substring(20, 30)}
          </p>
        </div>
      </div>

      <div className="h-10 w-10 flex items-center justify-center rounded-full   bg-menuIconBackground">
        <Icon
          icon="ic:baseline-message"
          fontSize={20}
          className={"text-textLightColor"}
        />
      </div>
    </div>
  );
};

export default ChatPartner;
