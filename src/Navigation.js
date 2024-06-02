import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import ment from '../src/assets/ment.webp';
import ca from '../src/assets/ca.webp';
import ma from '../src/assets/ma.webp';
import about from '../src/assets/about.webp';

function Navigation() {
  return (
    <div className="navigation flex justify-around items-center">
      <Link to="/" className="nav-link flex justify-center items-center">
        <button className="flex flex-col items-center">
          <div className="nav-icon">
            <img src={ment} alt="Mentorship Icon" />
            <div className="text-xs">Mentor</div>
          </div>
          <span className="nav-text">MENTORSHIP</span>
        </button>
      </Link>
      <Link to="/page2" className="nav-link flex justify-center items-center">
        <button className="flex flex-col items-center">
          <div className="nav-icon">
            <img src={ca} alt="Current Affairs Icon" />
            <div className="text-xs">News</div>
          </div>
          <span className="nav-text">CURRENT AFFAIRS</span>
        </button>
      </Link>
      <Link to="/page3" className="nav-link flex justify-center items-center">
        <button className="flex flex-col items-center">
          <div className="nav-icon">
            <img src={ma} alt="Mains Test Series Icon" />
            <div className="text-xs">Mains</div>
          </div>
          <span className="nav-text">MAINS TEST SERIES</span>
        </button>
      </Link>
      <Link to="/page4" className="nav-link flex justify-center items-center">
        <button className="flex flex-col items-center nav-text">
          <span className="nav-text">TESTIMONIALS</span>
        </button>
      </Link>
      <Link to="/page5" className="nav-link flex justify-center items-center">
        <button className="flex flex-col items-center">
          <div className="nav-icon">
            <img src={about} alt="About Icon" className="nav-icon" />
            <div className="text-xs">About</div>
          </div>
          <span className="nav-text">ABOUT</span>
        </button>
      </Link>
    </div>
  );
}

export default Navigation;
