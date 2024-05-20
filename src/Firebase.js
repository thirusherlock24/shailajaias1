// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs9U_csYuioIgSAfDT9GQDzPlMCiHgSpQ",
  authDomain: "shailajaias.firebaseapp.com",
  projectId: "shailajaias",
  storageBucket: "shailajaias.appspot.com",
  messagingSenderId: "562388357978",
  appId: "1:562388357978:web:488cbe05190bd5b4bad963",
  measurementId: "G-D72B51KFL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db };