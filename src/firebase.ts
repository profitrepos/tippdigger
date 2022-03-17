import { signOut, User, UserCredential } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDPJNRHa8ZDp4yM-eB22TDuzgcEYOmJAXs",
  authDomain: "tippdigger.firebaseapp.com",
  projectId: "tippdigger",
  storageBucket: "tippdigger.appspot.com",
  messagingSenderId: "1062049212701",
  appId: "1:1062049212701:web:8252cc414f7a9239e9d9f4",
  measurementId: "G-2WQTL2EJ8Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

// Custom hooks

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  return currentUser;
};

export { auth };

export default db;
