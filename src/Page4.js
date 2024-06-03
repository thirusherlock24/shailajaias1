import React from 'react';
import Slider from 'react-slick';
import './Page4.css';

    
const Page4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const testimonials = [
    {
      name: 'IFS RAJESH PONNAPPA',
      rank:'AIR 222 in UPSC CSE 2021',
      comment: '      I was lucky to have had the best of support. Gautham Sir has been pivotal in helping me through my Mains GS Papers. From helping me in analysing how to improve my answers, clearing my doubts and giving me pointers in the right direction, he boosted my confidence. I still remember how Sir, would sit with me even after a long day to discuss my Practice Papers. I owe a lot to Sir for all the support I received in the two and half months before my Mains Exam.',
      picture: '/images/2.jpg'
    },
    {
      name: 'IAS SRAVAN KUMAR',
      rank:'AIR 222 in UPSC CSE 2022, AIR 521 in UPSC CSE 2021',
      comment: '      I would like to thank you for all the support and mentorship you\'ve given me since 2020. You\'ve been more than a mentor in this UPSC Journey. The constant motivation to do better has kept me going. Your detailed evaluation and suggestions helped me improve my writing skills.',
      picture: '/images/3.jpg'
    },
    {
      name: 'KANHA JOSHI',
      rank:'AIR 16 in UPSC CAPF AC 2021  ',
      comment: '      Here the support provided to students is not mere mechanical, but it gives true mentorship and customised support as per the need of the student. I have personally benefited from the true support and mentorship of Shri G V Goutham sir. He provided me the right guidance at right times and motivated me to achieve my dreams. He has been one of the biggest factors behind my achievement.',
      picture: '/images/4.jpg'
    },
    {
      name: 'AMRITHA SURESH',
      rank:'AIR 22 in RBI Grade B 2023 Exam ',
      comment: '       Goutham Sir is a great mentor who will look at your preparation holistically and ensure that you\'re always on the right track. “I\'m grateful to have known you over the past year as a mentor and a friend”',
      picture: '/images/5.jpg'
    },
    {
      name:'Manupriya Tyagi',
      rank:'AIR 572 in UPSC CSE 2023',
      comment:'I would like to extend my gratitude to Gowtham sir for all his guidance. And I would also like to wish him the best for his institute.',
      picture:'/images/5.jpeg'
    }

  ];
  

  return (
    <div  className="page-4" style={{ minHeight: '100vh', backgroundColor: '#ffffff', overflow: 'hidden' }}>
   <div className='move'>  <div className="header4">
          <h1 className="title4">
            <span style={{ color: '#ce5e11' }}>TESTIMONIALS</span> 
          </h1>
        </div>     
    <div className="testimonial-slider"  >
      <Slider {...settings} >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-image-name">
              <img src={testimonial.picture} alt={testimonial.name} className="testimonial-image" />
              <h4>{testimonial.name}</h4>
              <p>{testimonial.rank}</p>
            </div>
            <div className="testimonial-comment">
              <p>{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
 
  );
};

export default Page4;