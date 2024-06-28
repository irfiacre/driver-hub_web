import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "./authentication";

export const findDocEntryByField = async (
  collectionName: string,
  fieldName: string,
  fieldValue: string
) => {
  const result: any = [];
  try {
    const resultQuery = query(
      collection(database, collectionName),
      where(fieldName, "==", fieldValue)
    );

    const resultSnapshot: any = await getDocs(resultQuery);
    resultSnapshot.forEach((doc: any) => {
      const docData = { id: doc.id, ...doc.data() };
      result.push(docData);
    });
  } catch (error: any) {
    console.error(`Error getting document to ${collectionName}: `, error);
    throw error;
  }
  return result[0];
};
