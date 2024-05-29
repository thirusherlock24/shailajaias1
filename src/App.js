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
  require('dotenv').config();

  const firebaseConfig = {
    apiKey: "AIzaSyDE1NP9JLv1p8U7o_tE9R-GahDUtU8LUaY",
  authDomain: "shailajaias-ee635.firebaseapp.com",
  projectId: "shailajaias-ee635",
  storageBucket: "shailajaias-ee635.appspot.com",
  messagingSenderId: "31185153851",
  appId: "1:31185153851:web:40b9d9c2a31e008fb6511e",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

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

  // const Layout = ({ children }) => (
  //   <>
  //     <div className="Landing">
  //       <Landing />
  //     </div>
  //     <div className="Navigation">
  //       <Navigation />
        
  //     </div>
  //     <div className="Notify">
  //     <Notify/>
  //     </div>
  //     <div>
        
  //       {children}
  //     </div>
  //   </>
  // );

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
        {/* /*<footer>
          <Notify />
        </footer>*/}
      </div>
    </Router>
  );
}

export default App;