import React from 'react';
import './../styles/menu.css';

export default function Menubar() {
  return (
    <div className='head'>
      <div className='head-left'>
        <img src='assets/curefit.svg' alt='cult' className='main-logo' />
      </div>
      <div className='head-middle'>
        <nav>
          <ul>
            <li>
              <img src='assets/eat.svg' alt='eatfit' className='menu-logo' />
            </li>
            <li>
              <img src='assets/cult.svg' alt='cultfit' className='menu-logo' />
            </li>
            <li>
              <img src='assets/mind.svg' alt='mindfit' className='menu-logo' />
            </li>
            <li>
              <img src='assets/care.svg' alt='carefit' className='menu-logo' />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
