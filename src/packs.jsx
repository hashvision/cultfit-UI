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
                  <p className='lbl-title'>Book 2 classes FREE!</p>
                  <p id='lbl-subtitle'>At any cult.fit center</p>
                  </div>
             <img src='./assets/arrow.svg' alt='arrow' id='lbl-r'/>
      </div>
   </div>
)

export default Packs;