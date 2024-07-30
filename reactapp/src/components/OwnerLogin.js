// // src/components/OwnerLogin.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/styles/OwnerLogin.css';
// const owners = [
//   { username: 'owner1', password: 'password1', company: 'THEJU WEDDING PLANNERS' },
//   { username: 'owner2', password: 'password2', company: 'REENA EVENTS' },
//   { username: 'owner3', password: 'password3', company: 'SID EVENTS' },
//   { username: 'owner4', password: 'password4', company: 'ROCKY EVENTS' },
//   { username: 'owner5', password: 'password5', company: 'GUNA CELEBS' },
//   { username: 'owner6', password: 'password6', company: 'RADHI EVENTS' }
// ];

// const OwnerLogin = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const owner = owners.find(o => o.username === username && o.password === password);
//     if (owner) {
//       navigate(`/dashboard/${owner.company}`, { state: { company: owner.company } });
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h1>Owner Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default OwnerLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/OwnerLogin.css';

const owners = [
  { username: 'owner1', password: 'password1', company: 'THEJU WEDDING PLANNERS' },
  { username: 'owner2', password: 'password2', company: 'REENA EVENTS' },
  { username: 'owner3', password: 'password3', company: 'SID EVENTS' },
  { username: 'owner4', password: 'password4', company: 'ROCKY EVENTS' },
  { username: 'owner5', password: 'password5', company: 'GUNA CELEBS' },
  { username: 'owner6', password: 'password6', company: 'RADHI EVENTS' }
];

const OwnerLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const owner = owners.find(o => o.username === username && o.password === password);
    if (owner) {
      navigate(`/dashboard/${owner.company}`, { state: { company: owner.company } });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="owner-login-container">
      <form className="owner-login-form">
        <h3>Owner Login</h3>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} type="button">Login</button>
      </form>
    </div>
  );
};

export default OwnerLogin;

