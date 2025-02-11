import React from 'react';
import {Link} from 'react-router-dom';
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <h3><Link to='/' className='logo'>Marvel Blog</Link></h3>
        <nav className="footer-nav">
          <ul>
            <li>Disclosure</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Advertise with us</li>
          </ul>
        </nav>
        <div className="footer-info">
          <p>Marvel Blog is a blog about Marvel movies and characters.</p>
          <p>Copyright @ 2025, Launchpad Digital Network, LLC. All Rights Reserved.</p>
        </div>
        <div className='footer-icons'>
        <img className="footer-icon" src='facebook_icon.png' alt = "icon"></img>
        <img className="footer-icon" src="instagram_icon.png" alt="icon"></img>
        <img className="footer-icon" src="twitter_icon.png" alt="icon"></img>
        </div>
      </div>
    </div>
  );
}
