import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>

        {/* Column 1: Brand + Icons */}
        <div className='footer-column'>
          <h1>Food Express</h1>
          <p>Hello sabai jana lai!</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='Facebook' />
            <img src={assets.twitter_icon} alt='Twitter' />
            <img src={assets.linkedin_icon} alt='LinkedIn' />
          </div>
        </div>

        {/* Column 2: Company */}
        <div className='footer-column'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className='footer-column'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>98056756756</li>
            <li>foodexpress33@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <p className='footer-copyright'>
        © 2024 Food Express — All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
