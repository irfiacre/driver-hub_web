import React from "react";
import { Icon } from "@iconify/react";

interface InputProps {
  value: string;
  onInputChange: (e: any) => void;
  handleSendMessage: () => void;
}

const ChatInput = ({ value, onInputChange, handleSendMessage }: InputProps) => {
  return (
    <div>
      <div className="flex items-center px-3 py-2 rounded-lg bg-white">
        <div className="bg-primary rounded-full p-0.5">
          <Icon
            icon="healthicons:truck-driver"
            fontSize={42}
            className="text-white"
          />
        </div>

        <textarea
          id="chat"
          rows={2}
          className="block mx-4 p-2.5 w-full text-sm text-textDarkColor bg-backgroundColor rounded-lg border border-gray-300 focus:outline-none"
          placeholder="Your message..."
          value={value}
          onChange={onInputChange}
        ></textarea>
        <button
          type="button"
          className="inline-flex justify-center p-3 rounded-full cursor-pointer bg-backgroundColor2 text-textLightColor hover:bg-primary hover:text-white"
          onClick={handleSendMessage}
        >
          <svg
            className="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
