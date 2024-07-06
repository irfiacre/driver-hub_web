"use client";
import React, { useState } from "react";
import BaseCard from "../../../components/cards/BaseCard";
import ChatPartner from "../../../components/chat/ChatPartner";
import ChatTemplate from "../../../components/chat/ChatTemplate";
import ChatBubble from "../../../components/chat/ChatBubble";

const ChatPage = ({ applications }: { applications: Array<any> }) => {
  const [selectedChatPartner, setSelectedChatPartner] = useState(
    applications[0]
  );

  const handleClickChartPartner = (partner: any) => {
    setSelectedChatPartner(partner);
  };

  return (
    <div className="w-full py-10 flex flex-row max-md:flex-col gap-2 text-textDarkColor max-h-svh">
      <div className="w-3/4 max-md:w-full">
        <BaseCard className="px-5 py-5 overflow-auto h-5/6">
          {applications.map((application) => (
            <div
              key={application.applicant.id}
              onClick={() => handleClickChartPartner(application)}
            >
              <ChatPartner
                key={application.applicant.userId}
                photoUrl={application.baseInformation.passportPhotoUrl}
                name={`${application.applicant.firstName} ${application.applicant.lastName}`}
                lastMessage="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
              <hr />
            </div>
          ))}
        </BaseCard>
      </div>

      <BaseCard className="w-full px-10 py-5 h-5/6">
        <ChatTemplate
          photoUrl={selectedChatPartner.baseInformation.passportPhotoUrl}
          name={`${selectedChatPartner.applicant.firstName} ${selectedChatPartner.applicant.lastName}`}
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
