import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            <Link to='/Home'>
                <img src='https://kalvium.community/images/sidebar-3d-logo.svg' alt="k-logo" className='logo'/>
            </Link>
        </div>
      <ul>
        <h3>
            <Link to="/contact" className='link-tag'> Contact</Link>
        </h3>
        <h3>
            <Link to="./about" className='link-tag'>About</Link>
        </h3>
        <h3></h3>
      </ul>
    </div>
  );
}

export default Navbar;
