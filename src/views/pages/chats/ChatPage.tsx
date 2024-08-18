"use client";
import React, { useCallback, useLayoutEffect, useState } from "react";
import BaseCard from "../../../components/cards/BaseCard";
import ChatPartner from "../../../components/chat/ChatPartner";
import ChatTemplate from "../../../components/chat/ChatTemplate";
import ChatBubble from "../../../components/chat/ChatBubble";
import { CHAT_COLLECTION } from "@/constants/collectionNames";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { database } from "@/services/firebase/storage";
import { uuidv4 } from "@firebase/util";

const ChatPage = ({
  employeeList,
  sender,
}: {
  employeeList: Array<any>;
  sender: any;
}) => {
  const collectionRef = collection(database, CHAT_COLLECTION);
  const [selectedChatPartner, setSelectedChatPartner] = useState(
    employeeList[0]
  );
  const [messages, setMessages] = useState<any>([]);

  const handleClickChartPartner = (partner: any) => {
    setSelectedChatPartner(partner);
  };

  useLayoutEffect(() => {
    const messageQuery = query(collectionRef, orderBy("createdAt", "asc"));
    const receiver = selectedChatPartner;
    const unsubscribe = onSnapshot(messageQuery, (snapshot) => {
      setMessages(
        snapshot.docs
          .filter((doc) => {
            const docData = doc.data();
            return (
              (docData.senderId === sender.userId &&
                docData.receiverId === receiver.userId) ||
              (docData.receiverId === sender.userId &&
                docData.senderId === receiver.userId)
            );
          })
          .map((doc) => ({
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate(),
          }))
      );
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChatPartner]);

  const onSend = useCallback((messageText: string) => {
    const receiver = selectedChatPartner;
    const messageObj = {
      _id: uuidv4(),
      createdAt: serverTimestamp(),
      text: messageText,
      user: sender,
      senderId: sender.userId,
      receiverId: receiver.userId,
    };
    if (sender.userId && receiver.userId) {
      addDoc(collectionRef, messageObj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full py-10 flex flex-row max-md:flex-col gap-2 text-textDarkColor max-h-svh">
      <div className="w-3/4 max-md:w-full">
        <BaseCard className="px-5 py-5 overflow-auto h-[67vh]">
          {employeeList.map((employee) => (
            <div
              key={employee.id}
              onClick={() => handleClickChartPartner(employee)}
            >
              <ChatPartner
                key={employee.userId}
                photoUrl={employee.photoUrl}
                name={`${employee.firstName} ${employee.lastName}`}
                lastMessage=""
              />
              <hr />
            </div>
          ))}
        </BaseCard>
      </div>

      <BaseCard className="w-full px-10 py-5">
        <ChatTemplate
          photoUrl={selectedChatPartner?.photoUrl}
          name={`${selectedChatPartner.firstName} ${selectedChatPartner.lastName}`}
          handleSendMessage={onSend}
        >
          {messages.map((msg: any) => (
            <div key={msg._id}>
              <ChatBubble
                name={`${msg.user.firstName} ${msg.user.lastName}`}
                message={msg.text}
                time={msg.createdAt}
                isSent={sender.userId === msg.senderId}
              />
            </div>
          ))}
        </ChatTemplate>
      </BaseCard>
    </div>
  );
};

export default ChatPage;
