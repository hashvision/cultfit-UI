import React from 'react';
import './menu.css';

const Menubar = () =>
(
    <nav>
    <ul>
        <li><img src ='curefit.svg' alt='cult' className='main-logo'/></li>
        <li><img src ='eat.svg' alt='eatfit' className='menu-logo'/></li>
        <li><img src ='cult.svg' alt='cultfit' className='menu-logo'/></li>
        <li><img src ='mind.svg' alt='mindfit' className='menu-logo'/></li>
        <li><img src ='care.svg' alt='carefit' className='menu-logo'/></li>
        <li><img src ='app.gif' alt='app' id='dwnlod'/><span>Download App</span></li>
        <li><img src ='location.svg' alt='location' className='menu-logo'/>Bangalore</li>
        <li><img src ='login.svg' alt='login' className='menu-logo'/>Login</li>
        <li><img src ='cart.svg' alt='cart' className='menu-logo'/></li>
    </ul>
 </nav>
)


export default  Menubar;