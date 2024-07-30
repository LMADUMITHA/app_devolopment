import React from 'react';
import '../assets/styles/Newbar2.css'; // Import the CSS file

function Newbar2() {
  return (
    <div>
      <div className="sidebar">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="content">
        <h2>Responsive Sidebar Example</h2>
        
      </div>
    </div>
  );
}

export default Newbar2;
