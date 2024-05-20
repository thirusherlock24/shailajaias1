import React, { useEffect, useState, useRef } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './Firebase';
import './FetchNotify.css';

const FetchNotify = () => {
  const [notifications, setNotifications] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchNotifications = async () => {
      const snapshot = await getDocs(collection(db, "Notification"));
      const data = snapshot.docs.map(doc => doc.data());
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer && notifications.length > 0) {
      const width = scrollContainer.scrollWidth;
      const speed = 50; // Pixels per second
      const duration = width / speed;

      scrollContainer.style.animation = `scroll ${duration}s linear forwards`;
      scrollContainer.addEventListener('animationend', () => {
        scrollContainer.style.animation = 'none'; 
        // Reset transform to original position (right)
        scrollContainer.style.transform = 'translateX(100%)'; 
        setTimeout(() => {
          scrollContainer.style.animation = `scroll ${duration}s linear forwards`;
        }, 1000); // 1 second delay
      });
    }
  }, [notifications]);

  return (
    <div className="marquee-container" style={{backgroundColor:'#E2F0D9'}}>
      <div className="marquee" ref={scrollRef}>
        {notifications.map((notification, index) => (
          <div className="notification-item" key={index}>
            {Object.entries(notification).map(([key, value]) => (
              <span key={key}>
                {key}: {value} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchNotify;
