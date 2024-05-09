import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
function Navpages() {
  
  return (
    <div >
        <div id="page1">
        <Page1/>
      </div>
      <div id="page2">
        <Page2/>
    
      </div>
      <div id="page3">
        <Page3/>
    
      </div>



     
    </div>
  );
};

export default Navpages;
