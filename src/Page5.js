// Page5.js
import React, { useEffect } from 'react';
import './Page5.css';

const Page5 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="page-5" style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '1rem' }}>
      <div>
        <h1 className="title5">About Us</h1>
      </div>
      <div className="container5">
        <div className="content5">
          <p>
            Welcome to Shailaja IAS Guidance Institute, your path to success! As a new age guidance institute, we are dedicated to offering holistic
            mentorship and unwavering support to individuals aspiring to become IAS/IPS officers.
            Our name is derived from the Sanskrit words meaning 'born of the mountain,' embodying the
            unwavering strength and stability we instill in our students. Join us on this transformative
            journey and unlock your true potential.
          </p>
          <p>
            Leading the way at Shailaja IAS Guidance Institute is G V Goutham sir (B.Tech, IIT), 
            a seasoned mentor with a remarkable history of guiding IAS aspirants towards triumphant outcomes.
            With his expertise, candidates like Sravan Kumar (IAS, Rank 222 UPSC CSE 2022), Rajesh Ponnappa (IFS, Rank 222 UPSC CSE 2021),
            and Omkar Shinde (IAS, Rank 433 UPSC CSE 2021) have fulfilled their aspirations, clearing the exam and contributing to the
            nation in diverse roles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;
