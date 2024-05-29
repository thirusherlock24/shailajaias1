import React, { useEffect } from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import Firebase Authentication
import 'firebase/compat/firestore'; // Import Firestore
import 'firebase/compat/storage'; // Import Storage
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landingpage.js';
import Navigation from './Navigation.js';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Retrieve from './Retrieve.js';
import Page5 from './Page5';
import MainsRetrieve from './MainsRetrieve.js';
import FetchNotify from './FetchNotify.js';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


function App() {
  useEffect(() => {
    const signInAnonymously = async () => {
      try {
        await firebase.auth().signInAnonymously();
        console.log('Signed in anonymously');
      } catch (error) {
        console.error('Error signing in anonymously:', error);
      }
    };

    signInAnonymously();
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <Landing />
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/CA" element={<Retrieve />} />
            <Route path="/Mains-CA" element={<MainsRetrieve />} />
          </Routes>
        </main>
        {/* <footer>
          <Notify />
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
