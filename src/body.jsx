import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Body = () => (
    <div className='slider'>
    <Carousel autoPlay infiniteLoop stopOnHover	 interval='5000' showArrows={false} showStatus={false} showThumbs={false} transitionTime={1500}>
       <div>
            <img src='assets/ss1.jpg' alt='ss1' />
        </div>
        <div>
            <img src='assets/ss2.jpg' alt='ss2' />
        </div>
        <div>
            <img src='assets/ss3.jpg' alt='ss3' />
        </div>
    </Carousel>
    </div>
)

export default Body;