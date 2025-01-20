// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 //Add here your api key
};

const app = initializeApp(firebaseConfig);

export const Data = getFirestore(app);
