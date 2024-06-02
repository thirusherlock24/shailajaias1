// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import test from '../src/assets/test.webp';
import ment from '../src/assets/ment.webp';
import ca from '../src/assets/ca.webp';
import ma from '../src/assets/ma.webp';
import about from '../src/assets/about.webp';

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="nav-link">
        <button>
          <div className="nav-icon">
             <img src={ment} alt="Mentorship Icon"  />
             <div style={{fontSize:'12px'}}>Mentor</div>
          </div>
          <span className="nav-text">MENTORSHIP</span>
        </button>
      </Link>
      <Link to="/page2" className="nav-link">
        <button>
        <div className="nav-icon">
          <img src={ca} alt="Current Affairs Icon"  />
          <div style={{fontSize:'12px'}}>News</div>
          </div>
          <span className="nav-text">CURRENT AFFAIRS</span>
        </button>
      </Link>
      <Link to="/page3" className="nav-link">
        <button>
        <div className="nav-icon">
          <img src={ma} alt="Mains Test Series Icon"  />
          <div style={{fontSize:'12px'}}>Mains</div>
          </div>
          <span className="nav-text">MAINS TEST SERIES</span>
        </button>
      </Link>
      <div className="nav-text">
      <Link to="/page4" className="nav-link">
        <button className="nav-text">
          <span className="nav-text">TESTIMONIALS</span>
        </button>
      </Link>
      </div>
      <Link to="/page5" className="nav-link">
        <button>
        <div className="nav-icon">
          <img src={about} alt="About Icon" className="nav-icon" />
          <div style={{fontSize:'12px'}}>About</div>
          </div>
          <span className="nav-text">ABOUT</span>
        </button>
      </Link>
    </div>
  );
}

export default Navigation;
