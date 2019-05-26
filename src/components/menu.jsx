import React from 'react';
import './../styles/menu.css';

const Menubar = () => (
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
    <div className='head-right'>
      <nav>
        <ul>
          <li>
            <img src='assets/app.gif' alt='app' id='dwnlod' />
            <span className='r-text'>Download App</span>
          </li>
          <li>
            <img
              src='assets/location.svg'
              alt='location'
              className='r-menu-logo'
            />
            <span className='r-text'>Bangalore</span>
          </li>
          <li>
            <img src='assets/login.svg' alt='login' className='r-menu-logo' />
            <span className='r-text'>Login</span>
          </li>
          <li>
            <img src='assets/cart.svg' alt='cart' className='r-menu-logo' />
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Menubar;
