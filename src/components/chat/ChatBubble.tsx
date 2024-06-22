import Image from "next/image";
import React from "react";

const ChatBubble = ({
  name,
  message,
}: //   receiver,
{
  name: string;
  message: string;
  //   receiver?: boolean;
}) => {
  return (
    <div>
      <div className="flex items-start gap-2.5">
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 ">{name}</span>
            <span className="text-sm font-normal text-gray-500 ">11:46</span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 ">{message}</p>
          <span className="text-sm font-normal text-gray-500 ">Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
