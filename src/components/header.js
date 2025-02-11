import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <h1>A Marvel Blog</h1>
      <p>Here you can find the latest updates and news for Marvel</p>
      <p>Follow us</p>

      <nav className="footer-nav">
        <ul>
        <li className='nav-li'>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className='nav-li'><Link to='/learn' className='logo'>Learn more</Link></li>
          <li className='nav-li'>Movies</li>
          <li className='nav-li'>TV</li>
          <li className='nav-li'>Comics</li>
        </ul>
      </nav>
    </div>
  );
}
