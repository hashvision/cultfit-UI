import React from 'react';
import  './packs.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Packs =() =>(
<div>
    <div>
    <nav>
       <ul>
           <li id='c1'>At Centre</li>
           <li id='c2'>At Home</li>
       </ul>
   </nav>
   </div>
      <div className='label'>
          <img src='./assets/tag.svg' alt='tag' id='lbl-l'/>
                  <div className='lbl-text'>
                  <p id='lbl-title'>Book 2 classes FREE!</p>
                  <p id='lbl-subtitle'>At any cult.fit center</p>
                  </div>
             <img src='./assets/arrow.svg' alt='arrow' id='lbl-r'/>
      </div>
      <div className='title-section'>
        <div className='title-t'>Cult Unlimited Membership</div>
        <div className='title-st'>Access to 100+ Cult centers | Free access to mind.fit and Cult outdoor centers | Attend unlimited number of classes</div>
      </div>
      <div className='all-packs'>
      <a className='packs'>
        <img className='pack-img' src = './assets/pack1.jpg' alt='p1'/>
        <div className='price-orignal'>
          <div className='p-det'>
                Fitness pack at Cult
          </div>
          <div className='mrp'>
                ₹11970
            </div>
        </div>
        <div className='offer-price'>
        <img className='price-img' src='./assets/price.svg' alt='ptag'/>
        <div className='o-det'>
             Offer Price:
        </div>
        <div className='price-val'>
            ₹8991
        </div>
        </div>
      </a>
      <a className='packs'>
        <img className='pack-img' src = './assets/pack2.jpg' alt='p2'/>
        <div className='price-orignal'>
          <div className='p-det'>
                Fitness pack at Cult
          </div>
          <div className='mrp'>
                ₹43380
            </div>
        </div>
        <div className='offer-price'>
        <img className='price-img' src='./assets/price.svg' alt='ptag'/>
        <div className='o-det'>
             Offer Price:
        </div>
        <div className='price-val'>
            ₹22491
        </div>
        </div>
        </a>
      <a className='packs'>
        <img className='pack-img' src = './assets/pack3.jpg' alt='p3'/>
        <div className='price-orignal'>
          <div className='p-det'>
                Fitness pack at Cult
          </div>
          <div className='mrp'>
                ₹22440
            </div>
        </div>
        <div className='offer-price'>
        <img className='price-img' src='./assets/price.svg' alt='ptag'/>
        <div className='o-det'>
             Offer Price:
        </div>
        <div className='price-val'>
            ₹14391
        </div>
        </div>
        </a>
      <a className='packs'>
        <img className='pack-img' src = './assets/pack4.jpg' alt='p4'/>
        <div className='price-orignal'>
          <div className='p-det'>
                Fitness pack at Cult
          </div>
          <div className='mrp'>
                ₹22440
            </div>
        </div>
        <div className='offer-price'>
        <img className='price-img' src='./assets/price.svg' alt='ptag'/>
        <div className='o-det'>
             Offer Price:
        </div>
        <div className='price-val'>
            ₹15291
        </div>
        </div>
      </a>
      </div>
      <div className='yt-link'>
                <video height="423" width="873" className='vid' poster='./assets/vid.jpg'>
                      <source src="https://s3.ap-south-1.amazonaws.com/curefit-content/video/CULTYourNewPlayground.mp4" type="video/mp4" />
                </video>
      </div>
      <div className='workouts'>
          <div className='w-title'>Choose your workouts</div>
          <div className='w-logo'>
              <img src='./assets/w1.jpg' alt='w1'/>
              <img src='./assets/w2.jpg' alt='w2'/>
              <img src='./assets/w3.jpg' alt='w3'/>
              <img src='./assets/w4.jpg' alt='w4'/>
              <img src='./assets/w5.jpg' alt='w5'/>
              <img src='./assets/w6.jpg' alt='w6'/>
              <img src='./assets/w7.jpg' alt='w7'/>
              <img src='./assets/w8.jpg' alt='w8'/>
              <img src='./assets/w9.jpg' alt='w9'/>
          </div>
          <div className='view'>
          <div className='view-head'>
          <div className='view-t'>Experience the space</div>
          <div className='view-st'>State-of-the-art facility for all your fitness needs</div>
          </div>
          <div className='view-slider'>
              <Carousel showArrows={false} showStatus={false} showThumbs={false} transitionTime={1000}>
                <div>
                     <img src='assets/v1.jpg' alt='v1' />
                 </div>
                 <div>
                     <img src='assets/v2.jpg' alt='v2' />
                 </div>
                 <div>
                     <img src='assets/v3.jpg' alt='v3' />
                 </div>
                 <div>
                     <img src='assets/v4.jpg' alt='v4' />
                 </div>
              </Carousel>
          </div>
          </div>
      </div>
   </div>
)

export default Packs;