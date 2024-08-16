"use client";
import {
  APPLICATIONS_COLLECTION,
  DRIVERS_COLLECTION,
} from "@/constants/collectionNames";
import { generateApplicant } from "@/constants/fixtures";
import {
  getCollectionEntries,
  subscribeToCollection,
} from "@/services/firebase/helpers";
import isAuth from "@/src/components/isAuth";
import Loading from "@/src/components/LoadingComponent";
import ChatPage from "@/src/views/pages/chats/ChatPage";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Chat = ({ user }: { user: any }) => {
  const applicants = [];
  for (let index = 0; index < 20; index++) {
    applicants.push(generateApplicant());
  }

  const [applicationsData, setApplicationsData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) =>
    setApplicationsData((prevData: any) => [...prevData, newChanges]);
  const [employeesData, setEmployees] = useState<any>([]);

  useLayoutEffect(() => {
    (async () => {
      const drivers = await getCollectionEntries(DRIVERS_COLLECTION);
      const employees = drivers.filter((elt: any) => elt.employee);
      setEmployees(employees);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {!employeesData[0] ? (
        <Loading />
      ) : (
        <ChatPage employeeList={employeesData} sender={user} />
      )}
    </div>
  );
};

export default isAuth(Chat);
