import { formatDate } from "@/util/helpers";
import moment from "moment";
import Image from "next/image";
import React from "react";

const ChatBubble = ({
  name,
  message,
  isSent,
  time,
}: //   receiver,
{
  name: string;
  message: string;
  isSent?: boolean;
  time?: string;
}) => {
  console.log("----", isSent);

  return (
    <div>
      <div
        className={`flex items-start gap-2.5 ${
          isSent ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded-e-xl rounded-es-xl ${
            isSent ? "bg-primary" : "border-gray-200 bg-gray-100"
          }`}
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span
              className={`text-sm font-bold text-textDarkColor ${
                isSent ? "text-white" : "text-textDarkColor"
              }`}
            >
              {name}
            </span>
          </div>
          <p
            className={`text-base font-normal py-2.5 text-textDarkColor ${
              isSent ? "text-white" : "text-textDarkColor"
            }`}
          >
            {message}
          </p>
          <div
            className={`flex justify-between items-center text-sm font-light ${
              isSent ? "text-borderColorLight" : "text-borderColorLight"
            }`}
          >
            <span>{moment(time).fromNow()}</span>
            <span className="font-extralight">sent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
