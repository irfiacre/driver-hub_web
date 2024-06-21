"use client";
import React from "react";
import BaseCard from "../components/cards/BaseCard";
import ChatPartner from "../components/chat/ChatPartner";
import ChatTemplate from "../components/chat/ChatTemplate";

const ChatPage = ({ applicants }: { applicants: Array<any> }) => {
  const handleClickChartPartner = (partner: any) => {};
  return (
    <div className="w-full px-10 py-10 flex flex-row max-md:flex-col gap-2 text-textDarkColor">
      <div className="w-3/4">
        <BaseCard className="px-1.5 py-5">
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              onClick={() => handleClickChartPartner(applicant)}
            >
              <ChatPartner
                key={applicant.id}
                photoUrl={applicant.photoUrl}
                name={applicant.name}
                lastMessage="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
              <hr />
            </div>
          ))}
        </BaseCard>
      </div>

      <BaseCard className="w-full px-10 py-5">
        <ChatTemplate
          photoUrl={"xxxx"}
          name={"xxxx"}
          handleSendMessage={() => console.log("mmmmmm")}
        >
          <span>Message Area</span>
        </ChatTemplate>
      </BaseCard>
    </div>
  );
};

export default ChatPage;
