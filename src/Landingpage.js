import React from 'react';
import symbol from "../src/assets/symbol.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Landingpage = () => {
  return (
    <header className="h-[16.6666vh] flex flex-column md:flex justify-between items-center p-2.5 bg-blue-200 text-white">
      <div className="flex items-center">
        <div className="name max-w-[200px] p-2.5 ml-[2%] md:ml-0">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            <span className="text-blue-600">SHAILAJA</span>
            <span className="text-orange-600">IAS</span>
          </h1>
        </div>
        <div className="logo-container hidden md:flex justify-center items-center">
          <img src={symbol} alt="logo" className="max-h-[30%] max-w-[30%] ml-[15%]" />
        </div>
      </div>
      <div className="contact-details flex flex-col items-end text-black mt-4 md:mt-0 w-full md:w-auto">
        <div className="flex items-center space-x-2">
          <i className="fas fa-phone"></i>
          <span>9900 691 648</span>
        </div>
        <div className="hidden md:block flex items-center space-x-2 justify-center md:justify-end">
          <i className="fas fa-envelope"></i>
          <span>gvg@shailajaias.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fab fa-telegram"></i>
          <span>t.me/shailajaias</span>
        </div>
      </div>
    </header>
  );
};

export default Landingpage;
