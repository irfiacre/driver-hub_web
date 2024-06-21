import { APPLICANT, generateApplicant } from "@/constants/fixtures";
import ChatPage from "@/src/pages/ChatPage";
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

export default Chat;
