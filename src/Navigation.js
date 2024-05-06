import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Page1 from './Page1';
import Page2 from './Page2';
import './Navigation.css';
function Navigation() {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div>
      <div className='navigation'>
      <button onClick={() => scrollToSection('page1')}>MENTORSHIP</button>
      <button onClick={() => scrollToSection('page2')}>CURRENT AFFAIRS</button>
      <button onClick={() => scrollToSection('page1')}>MAINS TEST SERIES</button>
      <button onClick={() => scrollToSection('page2')}>TESTIMONIALS</button>
    </div>

     



     
    </div>
  );
};

export default Navigation;
