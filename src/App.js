import React, { useState ,useEffect} from 'react';
import './App.css';
import "firebase/firestore";
import firebase from 'firebase/compat/app'; // Adjusted import statement
import 'firebase/compat/storage'; // Import storage module separately if needed
import 'firebase/storage';
import Retrieve from './Retrieve.js';
import { Folder } from '@mui/icons-material';
import { Box } from '@mui/material';
import Landing from './Landingpage.js';
import Navigation from './Navigation.js';
import Page1 from './Page1';
import Page2 from './Page2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navpages from './Navpages.js';
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

  firebase.initializeApp(firebaseConfig);

  const [activeFolder, setActiveFolder] = useState(null);


  const folders = ['Daily', 'Monthly', 'Yearly']; // Add folder names here

  return (
    <div>
    <div>
     <Landing />
      <Navigation />
      <div className="scrollable-navigation">
        <Navpages />
      </div>
    </div>

 
      </div>
  );
}

export default App;
