"use client";
import { generateApplicant } from "@/constants/fixtures";
import isAuth from "@/src/components/isAuth";
import ChatPage from "@/src/views/pages/chats/ChatPage";
import React from "react";

const Chat = () => {
  const applicants = [];
  for (let index = 0; index < 20; index++) {
    applicants.push(generateApplicant());
  }
  return (
    <div className="flex flex-col gap-3">
      <ChatPage applicants={applicants} />
    </div>
  );
};

export default isAuth(Chat);
