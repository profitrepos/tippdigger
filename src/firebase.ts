import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export { auth };

export default db;
