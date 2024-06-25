import { app } from "@/util/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface UserObject {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  role: string;
}

const auth: any = getAuth(app);

export const signExistingUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(auth.currentUser, {
      displayName: "Busy Dev",
      photoURL:
        "https://lh3.googleusercontent.com/a/ACg8ocLKgZxt5l26aaeNrKpoF6HF0KXRl-sZYEPlJOoOhtnLLcQP6kM=s288-c-no",
      firstName: "Busy",
      lastName: "Dev",
      createdAt: new Date(),
      role: "admin",
    });
    return user;
  } catch (error: any) {
    console.error(`Error getting Signing In User: `, error);
    throw error;
  }
};

export const addUser = async ({
  firstName,
  lastName,
  email,
  password,
  role,
}: UserObject) => {
  try {
    const additionalUserInformation = {
      displayName: `${firstName} ${lastName}`,
      photoUrl: "",
      firstName,
      lastName,
      createdAt: new Date(),
      role,
    };
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(auth.currentUser, additionalUserInformation);
    return user;
  } catch (error: any) {
    console.error(`Error getting Adding User: `, error);
    throw error;
  }
};
