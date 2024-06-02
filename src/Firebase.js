// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlnSn1gMqbkV1J_n-E4xiv2vh5Q1eb1zA",
  authDomain: "shailajaias1.firebaseapp.com",
  projectId: "shailajaias1",
  storageBucket: "shailajaias1.appspot.com",
  messagingSenderId: "154181094207",
  appId: "1:154181094207:web:b3280706ecac8497eae18a",
  measurementId: "G-7Q7HBVWMXB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore and Analytics
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, app };
