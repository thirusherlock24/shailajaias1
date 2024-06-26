import React, { useEffect } from 'react';
import './Page3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
const Page3 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="page-3" style={{ minHeight: '100vh', backgroundColor: '#ffffff', overflowX: 'hidden' }}>
      <div className="move">
        <div className="header3">
          <h1 className="title3">
            <span style={{ color: '#ce5e11' }}>Mains Test Series</span> 
          </h1>
        </div>
        <div className='details3' style={{ fontSize: '1.2em', marginLeft: '5%' }}>
        <Link to="/Mains-CA" target="_blank" rel="noopener noreferrer">
            <div className='inside-div'>
              <div className='inside-heading'>
                <h2>
                  <strong style={{ color: '#34495E' }}>Phase 1</strong><strong> (90 days)</strong><br/>8th July 2024 - 6th Oct 2024
                </h2>
              </div>
              <div className='inside-content'>
                <h2>
                  1.  Society<br/>
                  2.  Internal Security & DM<br/>
                  3.  Ethics<br/>
                  4.  Agriculture & Economy<br/>
                  5.  Governance & Social Justice<br/><br/>Total Mains Marks Coverage: ~ 470
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/Mains-CA" target="_blank" rel="noopener noreferrer">
            <div className='inside-div'>
              <div className='inside-heading'>
                <h2>
                  <strong style={{ color: '#34495E' }}>Phase 2</strong><strong> (100 days)</strong><br/>14th Oct 2024 – 26th Jan 2025
                </h2>
              </div>
              <div className='inside-content'>
                <h2>
                  1.  World History & Post Independence History<br/>
                  2.  Polity<br/>
                  3.  Economy<br/>
                  4.  Modern History<br/>
                  5.  Environment<br/><br/>Total Mains Marks Coverage: ~ 400
                </h2>
              </div>
            </div>
            </Link>
          <Link to="/Mains-CA" target="_blank" rel="noopener noreferrer">
            <div className='inside-div'>
              <div className='inside-heading'>
                <h2>
                  <strong style={{ color: '#34495E' }}>Phase 3</strong><strong> (50 days)</strong><br/>1st Feb 2025 – 22nd March 2025
                </h2>
              </div>
              <div className='inside-content'>
                <h2>
                  1.  Geography<br/>
                  2.  Ancient & med History<br/>
                  3.  Science & Technology<br/>
                  4.  Miscellaneous <br/><br/>Total Mains Marks Coverage: ~ 470
                </h2>
              </div>
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Page3;
