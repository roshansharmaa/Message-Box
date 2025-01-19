// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCynvWzIIGtAq3QO2zzCXRuRwHY9A2hUxQ",
  authDomain: "react-crud-68d76.firebaseapp.com",
  projectId: "react-crud-68d76",
  storageBucket: "react-crud-68d76.firebasestorage.app",
  messagingSenderId: "633558304055",
  appId: "1:633558304055:web:18b2107402ad4a86c846b2",
  measurementId: "G-GXKWZ00TZK"
};

const app = initializeApp(firebaseConfig);

export const Data = getFirestore(app);
