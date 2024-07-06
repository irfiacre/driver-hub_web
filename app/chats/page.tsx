"use client";
import { APPLICATIONS_COLLECTION } from "@/constants/collectionNames";
import { generateApplicant } from "@/constants/fixtures";
import { subscribeToCollection } from "@/services/firebase/helpers";
import isAuth from "@/src/components/isAuth";
import Loading from "@/src/components/LoadingComponent";
import ChatPage from "@/src/views/pages/chats/ChatPage";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const applicants = [];
  for (let index = 0; index < 20; index++) {
    applicants.push(generateApplicant());
  }

  const [applicationsData, setApplicationsData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) =>
    setApplicationsData((prevData: any) => [...prevData, newChanges]);
  useEffect(() => {
    return () =>
      subscribeToCollection(APPLICATIONS_COLLECTION, handleOnUpdateData);
  }, []);

  console.log("-----", applicationsData);

  return (
    <div className="flex flex-col gap-3">
      {!applicationsData[0] ? (
        <Loading />
      ) : (
        <ChatPage applications={applicationsData} />
      )}
    </div>
  );
};

export default isAuth(Chat);
