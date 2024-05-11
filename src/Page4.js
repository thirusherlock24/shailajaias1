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
        name: 'madhu',
        comment: 'I am madhu, Rank 01, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by you. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
        picture: '/images/1.jpeg'
      },
      {
        name: 'yas',
        comment: 'I am yas, Rank 02, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by you. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
        picture: '/images/2.jpeg'
      },
    {
      name: 'mithun',
      comment: 'I am mithun, Rank 420, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by sir. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
      picture: '/images/m.jpg'
    },
    {
      name: 'rahul',
      comment: 'I am rahul, Rank 8, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by sir. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
      picture: '/images/4.jpeg'
    },
    {
        name: 'bharath',
        comment: 'I am bharath, Rank 7, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by sir. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
        picture: '/images/b.jpg'
      },
      {
        name: 'purnima',
        comment: 'I am purnima, Rank 999, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by sir. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
        picture: '/images/p.jpeg'
      },
      {
        name: 'mounika',
        comment: 'I am mounika, Rank 14, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by sir. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
        picture: '/images/mo.jpeg'
      },
      {
        name: 'harith',
        comment: 'I am harith, Rank 3, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by sir. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
        picture: '/images/h.jpg'
      },
      {
        name: 'rishab',
        comment: 'I am rishab, Rank 11, UPSC CSE 2024. I am filled with gratitude for the intensive efforts in action and spirit put by sir. I want to take this opportunity to thank gowtham Sir for his continuous support and guidance. In all the three stages of Prelims, Mains and PT, shailaja delivers excellence. I am thankful for your contribution in my journey.',
        picture: '/images/r.jpg'
      }
   ]

  return (
    <div  className="page-4" style={{ minHeight: '100vh', backgroundColor: 'lightblue', overflowX: 'hidden' }}>
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