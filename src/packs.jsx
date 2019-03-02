import React from 'react';
import  './packs.css';

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
   </div>
)

export default Packs;