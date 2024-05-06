import React, { useEffect } from 'react';

const Page2 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div style={{ height: '100vh', backgroundColor: 'lightblue' }}>
      <h1>Page 2</h1>
      <p>This is Page 2 content.</p>
    </div>
  );
};

export default Page2;
