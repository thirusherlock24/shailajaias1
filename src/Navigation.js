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
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementOffset = element.offsetTop - headerHeight;
        const screenHeight = window.innerHeight;
        const scrollPosition = elementOffset - (0.1 * screenHeight); // Adjust percentage as needed
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
    };
  return (
    <div>
    <div className="navigation nav-fix"> {/* Add class nav-fix for sticky positioning */}
      
      <button onClick={() => scrollToSection('page1')}>MENTORSHIP</button>
      <button onClick={() => scrollToSection('page2')}>CURRENT AFFAIRS</button>
      <button onClick={() => scrollToSection('page1')}>MAINS TEST SERIES</button>
      <button onClick={() => scrollToSection('page2')}>TESTIMONIALS</button>
    

     



     
    </div>
    </div>
  );
};

export default Navigation;
