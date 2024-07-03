import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { database } from "./authentication";

export const subscribeToCollection = (
  collectionName: string,
  onDataChange: (data: any) => void
) => {
  try {
    onSnapshot(collection(database, collectionName), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          onDataChange(change.doc.data());
        }
      });
    });
  } catch (error: any) {
    throw error;
  }
};

export const subscribeToDocument = (
  collectionName: string,
  onDataChange: (data: any) => void,
  docId: string
) => {
  try {
    onSnapshot(doc(database, collectionName, docId), (snapshot) => {
      onDataChange(snapshot.data());
    });
  } catch (error: any) {
    throw error;
  }
};

export const getCollectionEntries = async (collectionName: string) => {
  let result: any[] = [];
  try {
    const querySnapshot = await getDocs(collection(database, collectionName));
    result = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error: any) {
    return { ...error };
  }
  return result;
};

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
    return { ...error };
  }
  return result[0];
};

export const createDocEntry = async (collectionName: string, docObj: any) => {
  try {
    const docRef = doc(database, collectionName, docObj.id);
    await setDoc(docRef, docObj);
    return true;
  } catch (e) {
    return false;
  }
};

export const updateDocEntry = async (
  collectionName: string,
  docEntryId: string,
  docObj: any
): Promise<boolean> => {
  try {
    const quizDocRef = doc(database, collectionName, docEntryId);
    await updateDoc(quizDocRef, docObj);
    return true;
  } catch (error: any) {
    return { ...error };
  }
};

export const findDocEntryById = async (
  collectionName: string,
  docEntryId: string
): Promise<any> => {
  try {
    const quizDocRef = doc(database, collectionName, docEntryId);
    const quizSnapshot = await getDoc(quizDocRef);
    if (quizSnapshot.exists()) {
      const quizData = {
        id: quizSnapshot.id,
        ...quizSnapshot.data(),
      };
      return quizData;
    } else {
      throw new Error(`DocEntry from ${collectionName}: not found`);
    }
  } catch (error: any) {
    return { ...error };
  }
};

export const deleteDocEntryById = async (
  collectionName: string,
  docEntryId: string
): Promise<any> => {
  try {
    const quizDocRef = doc(database, collectionName, docEntryId);
    await deleteDoc(quizDocRef);
    return true;
  } catch (error: any) {
    return { ...error };
  }
};
