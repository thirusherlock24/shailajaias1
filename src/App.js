import React, { useEffect } from 'react';
import './App.css';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import Firebase Authentication
import 'firebase/compat/storage';
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
import Notify from './FetchNotify.js'
import FetchNotify from './FetchNotify.js';
function App() {
  const firebaseConfig = {
    // Your Firebase project configuration
    apiKey: "AIzaSyCs9U_csYuioIgSAfDT9GQDzPlMCiHgSpQ",
    authDomain: "shailajaias.firebaseapp.com",
    projectId: "shailajaias",
    storageBucket: "shailajaias.appspot.com",
    messagingSenderId: "562388357978",
    appId: "1:562388357978:web:488cbe05190bd5b4bad963",
    measurementId: "G-D72B51KFL6"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    firebase.auth().signInAnonymously().catch(function(error) {
      console.error("Error signing in anonymously:", error);
    });
  }, []);

  const Layout = ({ children }) => (
    <>
      <div className="Landing">
        <Landing />
      </div>
      <div className="Navigation">
        <Navigation />
        
      </div>
      <div className="Notify">
      <Notify/>
      </div>
      <div>
        
        {children}
      </div>
    </>
  );

  return (
    <Router>
        <Routes>

      <Route path="/" element={<Layout><Page1 /></Layout>} />
        <Route path="/page2" element={<Layout><Page2 /></Layout>} />
        <Route path="/page3" element={<Layout><Page3 /></Layout>} />
        <Route path="/page4" element={<Layout><Page4 /></Layout>} />
        <Route path="/page5" element={<Layout><Page5 /></Layout>} />
        <Route path="/CA" element={<Retrieve  />} />
        <Route path="/Mains-CA" element={<MainsRetrieve />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
