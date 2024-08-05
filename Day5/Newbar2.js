// import React from 'react';
// import '../assets/styles/Newbar2.css'; // Import the CSS file

// function Newbar2() {
//   return (
//     <div>
//       <div className="sidebar">
//         <a className="active" href="#home">Home</a>
//         <a href="#news">My bookings</a>
//         <a href="#contact">Edit my profile</a>
        
//       </div>
//       <div className="content">
//         <h2>Responsive Sidebar Example</h2>
        
//       </div>
//     </div>
//   );
// }

// export default Newbar2;

import React, { useState } from 'react';
import { useOwner } from '../context/OwnerContext';
import '../assets/styles/Newbar2.css';
import EditProfile from './EditProfile';

function Newbar2() {
  const [activeSection, setActiveSection] = useState('home');
  const { isOwner, ownerName } = useOwner();
  const [username, setUsername] = useState(ownerName || 'User');
  const [password, setPassword] = useState('******'); // Placeholder password

  return (
    <div>
      <div className="newbar2-sidebar">
        <button 
          className={activeSection === 'home' ? 'newbar2-active' : ''} 
          onClick={() => setActiveSection('home')}
        >
          Home
        </button>
        <button 
          className={activeSection === 'bookings' ? 'newbar2-active' : ''} 
          onClick={() => setActiveSection('bookings')}
        >
          My bookings
        </button>
        <button 
          className={activeSection === 'profile' ? 'newbar2-active' : ''} 
          onClick={() => setActiveSection('profile')}
        >
          Edit my profile
        </button>
      </div>
      <div className="newbar2-content">
        {activeSection === 'home' && <h2>Responsive Sidebar Example</h2>}
        {activeSection === 'bookings' && <h2>My Bookings</h2>}
        {activeSection === 'profile' && (
          <EditProfile
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </div>
    </div>
  );
}

export default Newbar2;
