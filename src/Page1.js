import React, { useEffect } from 'react';
import './Page1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Page1 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="page-1 mt-6 md:mt-0" style={{ backgroundColor: '#ffffff', paddingTop: '1rem' }}>
      <div className=''>
      <h1 className="p-1 w-4/5 mx-auto text-5vw md:text-3vw lg:text-2vw font-bold text-[#ce5e11] text-center">
          Comprehensive Mentorship Programme for UPSC CSE 2025 & beyond
        </h1>
      </div>
      <div className='container my-6'>
        <div className='content' style={{ fontSize: '1.2rem' }}>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#0e85d1', marginRight: '5px' }} />
              <strong>Personalised One-to-One Guidance</strong>
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11', marginLeft: '10%', paddingRight: '1%' }} />
              Customised <span style={{ color: '#ff8102' }}>Individual Plan</span>
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#0e85d1', marginRight: '5px' }} />
              <strong>Regular follow up & <span style={{ color: '#0e85d1' }}>Accountability</span></strong>
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11', marginLeft: '10%', paddingRight: '1%' }} />
              Ensuring Implementation of Plan
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#0e85d1', marginRight: '5px' }} />
              <strong>Mains Answer writing (GS + Essay) Tests Included (Flexible)</strong>
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11', marginLeft: '10%', paddingRight: '1%' }} />
              Live <span style={{ color: '#ff8102' }}>Evaluation by Mentor himself</span>
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#0e85d1', marginRight: '5px' }} />
              <strong>Current Affairs Guidance</strong>
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11', marginLeft: '10%', paddingRight: '1%' }} />
              Content, Tests & Classes
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#0e85d1', marginRight: '5px' }} />
              <strong>Guidance on Prelims</strong> (Open Mock Tests included)
            </h2>
          </div>
        </div>
        <div className="details flex flex-col justify-center items-center">
  <div className="youtube mt-12 md:mt-24 lg:mt-6 mb-6">
            <iframe
              className="w-full md:w-[32rem] lg:w-96 h-64 lg:h-80"
              src="https://www.youtube.com/embed/9_xMvx-vnJ0?list=RD9_xMvx-vnJ0&start_radio=1&origin=https://your-app-domain.com" // Replace with your domain
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex justify-center items-center w-full">
            <a 
              href="https://forms.gle/WUrF9qL4BssbR6vE6" // Replace with your actual Google Form link
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <button className="CTABtn w-full md:w-fit py-4 px-8 heading5 text-white bg-[#0e85d1] hover:text-black hover:bg-[#ce5e11] transition-all duration-300">
                Fill Google Form
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
