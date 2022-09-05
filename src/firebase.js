import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCusdrpe8UVDl5RAlb4D9aVcJ-fcPGycKw",
  authDomain: "chat-application-e5b46.firebaseapp.com",
  projectId: "chat-application-e5b46",
  storageBucket: "chat-application-e5b46.appspot.com",
  messagingSenderId: "941182592115",
  appId: "1:941182592115:web:93b9c0c5d93fd51dcdb606",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const store = getStorage();
export const db = getFirestore();
