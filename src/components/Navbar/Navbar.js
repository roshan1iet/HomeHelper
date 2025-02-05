import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.jpg';


const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-brand-container">
        <img src={logo} alt="Logo" style={{ width: '55px' }} />
          <h1>Home Helper</h1>
        </div>

        <ul className="navbar-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><a href="#Services">Services</a></li>

          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul> {/* Add this <ul> wrapper */}
          <li 
            className="dropdown"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <a href="/login" className="dropdown-toggle">
              Login <span className="arrow">&#x25BC;</span>
            </a>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><NavLink to="/loginU">Login</NavLink></li>
                <li><NavLink to="/loginA">AdminLogin</NavLink></li>
              </ul>
            )}
          </li>
        </ul> {/* Close the <ul> wrapper */}
      </div>
    </nav>
  );
};

export default Navbar;