// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs9U_csYuioIgSAfDT9GQDzPlMCiHgSpQ",
  authDomain: "shailajaias.firebaseapp.com",
  projectId: "shailajaias",
  storageBucket: "shailajaias.appspot.com",
  messagingSenderId: "562388357978",
  appId: "1:562388357978:web:488cbe05190bd5b4bad963",
  measurementId: "G-D72B51KFL6"
};

const newFirebaseConfig = {
  apiKey: "AIzaSyDE1NP9JLv1p8U7o_tE9R-GahDUtU8LUaY",
  authDomain: "shailajaias-ee635.firebaseapp.com",
  projectId: "shailajaias-ee635",
  storageBucket: "shailajaias-ee635.appspot.com",
  messagingSenderId: "31185153851",
  appId: "1:31185153851:web:40b9d9c2a31e008fb6511e",
};

// Initialize default Firebase app
let defaultApp;
if (!getApps().length) {
  defaultApp = initializeApp(firebaseConfig);
} else {
  defaultApp = getApp();
}

// Initialize named Firebase app
const newAppName = 'newApp';
let newApp;
if (!getApps().some(app => app.name === newAppName)) {
  newApp = initializeApp(newFirebaseConfig, newAppName);
} else {
  newApp = getApp(newAppName);
}

// Initialize Firestore and Analytics for the default app
const db = getFirestore(defaultApp);
const analytics = getAnalytics(defaultApp);

export { db, defaultApp, newApp };
