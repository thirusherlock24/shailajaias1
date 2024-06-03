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
        <div className='hidden lg:block'>
        <div className="flex justify-center items-center">
          <img src={symbol} alt="logo" className="max-h-[30%] max-w-[30%]" />
        </div>
        </div>
      </div>
      <div className="contact-details flex flex-col items-end text-black mt-4 md:mt-0 whitespace-nowrap md:flex-1 md:justify-end">
        <div className="flex items-center space-x-2">
          <i className="fas fa-phone"></i>
          <a href="tel:9900691648" className="hover:underline">9900 691 648</a>
        </div>
        <div className="hidden md:flex items-center space-x-2 whitespace-nowrap">
          <i className="fas fa-envelope"></i>
          <a href="mailto:gvg@shailajaias.com" className="hover:underline">gvg@shailajaias.com</a>
        </div>
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <i className="fab fa-telegram"></i>
          <a href="https://t.me/shailajaias" target="_blank" rel="noopener noreferrer" className="hover:underline">t.me/shailajaias</a>
        </div>
      </div>
    </header>
  );
};

export default Landingpage;
