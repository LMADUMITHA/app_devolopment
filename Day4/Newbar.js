

// import React, { useState } from 'react';
// import '../assets/styles/Newbar.css';
// import logo from '../assets/styles/logo3.png'; // Adjust the path if necessary

// const Newbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="sidenav">
//       <div className="logo-container">
//         <img src={logo} alt="Company Logo" className="logo" />
//       </div>
//       <a href="#about">About</a>
//       <a href="#services">Edit Theme</a>
//       <a href="#clients">Create Theme</a>
//       <a href="#contact">Bookings</a>
//       <button className={`dropdown-btn ${dropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
//         Dropdown 
//         <i className="fa fa-caret-down"></i>
//       </button>
//       <div className="dropdown-container" style={{ display: dropdownOpen ? 'block' : 'none' }}>
//         <a href="#">Link 1</a>
//         <a href="#">Link 2</a>
//         <a href="#">Link 3</a>
//       </div>
//       <a href="#search">Search</a>
//     </div>
//   );
// };

// export default Newbar;



// import React, { useState } from 'react';
// import '../assets/styles/Newbar.css';
// import logo from '../assets/styles/logo3.png'; // Adjust the path if necessary
// import adminProfile from '../assets/styles/halls1.jpg'; // Adjust the path if necessary
// import { Link } from 'react-router-dom';
// const Newbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="sidenav">
//       <div className="logo-container">
//         <img src={logo} alt="Company Logo" className="logo" />
//       </div>
//       <div className="admin-profile-container">
//         <img src={adminProfile} alt="Admin Profile" className="admin-profile" />
//         <p className="admin-profile-label">Admin's Profile</p>
//       </div>
//       <a href="#about">About</a>
//       <Link to="/display">Edit Theme</Link>
//       <Link to="/display2">Create Theme</Link>
//       <Link to="/noofbook">Bookings</Link>
      
      
     
//     </div>
//   );
// };

// export default Newbar;

import React, { useState } from 'react';
import '../assets/styles/Newbar.css';
import logo from '../assets/styles/logo3.png'; // Adjust the path if necessary
import adminProfile from '../assets/styles/halls1.jpg'; // Adjust the path if necessary
import { Link, useNavigate } from 'react-router-dom';

const Newbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing authentication tokens)
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="sidenav">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <div className="admin-profile-container">
        <img src={adminProfile} alt="Admin Profile" className="admin-profile" />
        <p className="admin-profile-label">Admin's Profile</p>
      </div>
      <a href="#about">About</a>
      <Link to="/display">Edit Theme</Link>
      <Link to="/display2">Create Theme</Link>
      <Link to="/noofbook">Bookings</Link>
      {/* <button className={`dropdown-btn ${dropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        Dropdown 
        <i className="fa fa-caret-down"></i>
      </button> */}
      {/* <div className="dropdown-container" style={{ display: dropdownOpen ? 'block' : 'none' }}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div> */}
      {/* <a href="#search">Search</a> */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Newbar;
