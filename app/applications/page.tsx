"use client";
import React, { useEffect, useState } from "react";
import SearchableTable from "@/src/components/tables/SearchableTable";
import isAuth from "@/src/components/isAuth";
import {
  getCollectionEntries,
  subscribeToCollection,
} from "@/services/firebase/helpers";
import { APPLICATIONS_COLLECTION } from "@/constants/collectionNames";
import Loading from "@/src/components/LoadingComponent";
import TableFilterWrapper from "@/src/components/TableFilterWrapper";

const Applications = () => {
  const [data, setData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) =>
    setData((prevData: any) => [...prevData, newChanges]);

  const initialFindApplications = async () => {
    const result = await getCollectionEntries(APPLICATIONS_COLLECTION);
    setData(result);
  };

  useEffect(() => {
    initialFindApplications();
    return () =>
      subscribeToCollection(APPLICATIONS_COLLECTION, handleOnUpdateData);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {!data[0] ? (
        <Loading />
      ) : (
        <TableFilterWrapper title="Applications">
          <SearchableTable data={data} />
        </TableFilterWrapper>
      )}
    </div>
  );
};

export default isAuth(Applications);
