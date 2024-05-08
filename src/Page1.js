import React, { useEffect } from 'react';
import './Page1.css';
import YouTube from 'react-youtube';
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
    <div className="page-1" style={{ height: '100vh', backgroundColor: 'lightblue' }}>
     <div className="header">
  <h1 className="title">
    Comprehensive Mentorship Programme for UPSC CSE 2025 & beyond
  </h1>
</div>
<div className='container'>



    <div className='content' style={{ fontSize: '1.2em', marginLeft: '5%'  }}>
      <div>
        <h2>
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#0e85d1', marginRight: '5px' }} />
          <strong>Personalised One-to-One Guidance</strong>
        </h2>
      </div>
      <div>
        <h2>
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11', marginLeft: '10%', paddingRight:'1%'}} />
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
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11',  marginLeft: '10%', paddingRight:'1%'}} />
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
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11',  marginLeft: '10%', paddingRight:'1%' }} />
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
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: '#ce5e11',  marginLeft: '10%', paddingRight:'1%' }} />
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
  

      
      <div className='details'>
    <div className='youtube'>
        <YouTube
          videoId="QdBbggsMOk0"
          opts={{ width: '60%', height: '60%' }}
        />
      </div>
      <div className='state'>
        <h2>
            Two Sessions free <br/> (Fill details below)
        </h2>
      </div>
      </div>
      </div>

    </div>
  );
};

export default Page1;
