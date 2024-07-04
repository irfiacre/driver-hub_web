import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { DOCUMENTS_COLLECTION } from "@/constants/collectionNames";
import { app } from "@/util/firebase";

export const storage = getStorage(app);
export const database = getFirestore(app);

export const uploadFile = async (
  file: any,
  fileType: any,
  onGotDownloadUrl: (url: string) => void,
  fileName?: string
) => {
  const REFERENCE_DIR = fileType.includes("image") ? "images" : "documents";
  // const response = await fetch(uri);
  const formData = file;

  const storageRef = ref(storage, `${REFERENCE_DIR}/` + fileName);
  const uploadTask = uploadBytesResumable(storageRef, formData);
  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      return { ...error };
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        if (downloadURL) {
          const fileMetadata: any = {
            id: fileName,
            url: downloadURL,
            name: fileName,
            type: fileType,
          };
          const docRef = doc(database, DOCUMENTS_COLLECTION, fileMetadata.id);
          await setDoc(docRef, fileMetadata);
          onGotDownloadUrl(fileMetadata);
          return fileMetadata;
        }
      });
    }
  );
  return false;
};
