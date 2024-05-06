import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Page1 from './Page1';
import Page2 from './Page2';
function Navpages() {
  
  return (
    <div  className="scrollable-navigation">
        <div id="page1" style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        <Page1/>
      </div>
      <div id="page2" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
        <Page2/>
    
      </div>



     
    </div>
  );
};

export default Navpages;
