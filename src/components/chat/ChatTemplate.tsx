"use client";
import React, { useState } from "react";
import BaseInput from "../inputs/BaseInput";

interface ChatTemplateProps {
  photoUrl: string;
  name: string;
  children: any;
  handleSendMessage: (message: string) => void;
}

const ChatTemplate = ({
  photoUrl,
  name,
  children,
  handleSendMessage,
}: ChatTemplateProps) => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <div>
      <div>
        <p>{photoUrl}</p>
        <p> {name}</p>
      </div>
      <hr />
      <div className="py-1.5">{children}</div>
      <hr />
      <div>
        <BaseInput
          label="Password"
          value={message}
          error={null}
          placeholder="Password"
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ChatTemplate;
