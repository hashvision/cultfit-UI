import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Body = () => (
  <div className='slider' style={{ marginTop: '62.5px' }}>
    <Carousel
      autoPlay
      infiniteLoop
      stopOnHover
      interval='5000'
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={500}
    >
      <div>
        <img
          src='https://res.cloudinary.com/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/23705be6-c8ac-457f-8801-14a8b641ba87.jpg'
          alt='ss1'
        />
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/c822cf40-a73c-4b6b-8bb1-7013ea32de19.jpg'
          alt='ss3'
        />
      </div>
    </Carousel>
  </div>
);

export default Body;
