

import React, { useState } from 'react';
import '../assets/styles/Newbar.css';
import logo from '../assets/styles/logo3.png'; // Adjust the path if necessary

const Newbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="sidenav">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
      <button className={`dropdown-btn ${dropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        Dropdown 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-container" style={{ display: dropdownOpen ? 'block' : 'none' }}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <a href="#search">Search</a>
    </div>
  );
};

export default Newbar;

