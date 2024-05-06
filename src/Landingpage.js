import React from 'react';
import symbol from "../src/assets/symbol.png"
import './Landingpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Landingpage = () => {
  return (
    <header className="header">
      <div className="name">
      <h1 style={{ fontSize: '2rem' }}>
          <span style={{ color: '#115ece' }}><strong>SHAILAJA</strong></span>
          <span style={{ color: '#ce5e11' }}><strong>IAS</strong></span>
        </h1>
      </div>
      <div className="logo-container">
        <img src={symbol} alt='logo' className='logo'></img>
      </div>
      <div className="contact-details">
        <div>
          <i className="fas fa-phone"></i> 9900 691 648
        </div>
        <div>
          <i className="fas fa-envelope"></i> gvg@shailajaias.com
        </div>
        <div>
          <i className="fab fa-telegram"></i> t.me/shailajaias
        </div>
      </div>
    </header>
  );
};

export default Landingpage;
