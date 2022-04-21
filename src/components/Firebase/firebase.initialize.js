// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};
// Initialize Firebase

export default initializeFirebase;
