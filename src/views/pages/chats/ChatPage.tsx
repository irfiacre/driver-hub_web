"use client";
import React, { useState } from "react";
import BaseCard from "../../../components/cards/BaseCard";
import ChatPartner from "../../../components/chat/ChatPartner";
import ChatTemplate from "../../../components/chat/ChatTemplate";
import ChatBubble from "../../../components/chat/ChatBubble";

const ChatPage = ({ applicants }: { applicants: Array<any> }) => {
  const [selectedChatPartner, setSelectedChatPartner] = useState(applicants[0]);

  const handleClickChartPartner = (partner: any) => {
    setSelectedChatPartner(partner);
  };
  return (
    <div className="w-full py-10 flex flex-row max-md:flex-col gap-2 text-textDarkColor max-h-svh">
      <div className="w-3/4 max-md:w-full">
        <BaseCard className="px-5 py-5 overflow-auto h-5/6">
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              onClick={() => handleClickChartPartner(applicant)}
            >
              <ChatPartner
                key={applicant.id}
                photoUrl={applicant.photoUrl}
                name={applicant.name}
                lastMessage="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
              <hr />
            </div>
          ))}
        </BaseCard>
      </div>

      <BaseCard className="w-full px-10 py-5 h-5/6">
        <ChatTemplate
          photoUrl={selectedChatPartner.photoUrl}
          name={selectedChatPartner.name}
          handleSendMessage={() => console.log("mmmmmm")}
        >
          <ChatBubble
            name={selectedChatPartner.name}
            message="Awesome. I think our users will really appreciate the improvements."
          />
        </ChatTemplate>
      </BaseCard>
    </div>
  );
};

export default ChatPage;
