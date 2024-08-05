// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useOwner } from '../context/OwnerContext';
// import '../assets/styles/Login.css';
// import brideGroomImage from '../assets/styles/bride.png'; 
// import { Link } from 'react-router-dom';


// const owners = {
//   wedplanners: 'password1',
//   marriedly: 'password2',
//   justfun: 'password3',
//   weddays: 'password4',
// };

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { setIsOwner, setOwnerName } = useOwner(); 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       document.querySelector('.bride-groom-left').classList.add('visible');
//       document.querySelector('.bride-groom-right').classList.add('visible');
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleLogin = () => {
//     if (owners[username] === password) {
//       setIsOwner(true);
//       setOwnerName(username); 
//       navigate(`/dashboard/${username}`);
//     } else {
//       setIsOwner(false);
//       navigate('/userdashboard');
//     }
//   };

//   return (
//     <div className="login-container">
//       <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-left" />
//       <div className="login-form">
//         <h1>LOGIN</h1>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button onClick={handleLogin}>Login</button>
//         <p>Don't have an account? <Link to="/register">Register</Link></p>
//       </div>
//       <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-right" />
//     </div>
//   );
// }

// export default Login;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useOwner } from '../context/OwnerContext';
// import '../assets/styles/Login.css';
// import brideGroomImage from '../assets/styles/bride.png'; // Import the image
// import { Link } from 'react-router-dom';

// // Define the credentials
// const owners = {
//   wedplanners: 'password1',
//   marriedly: 'password2',
//   justfun: 'password3',
//   weddays: 'password4',
// };

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { setIsOwner, setOwnerName } = useOwner(); // Make sure to add setOwnerName

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       document.querySelector('.bride-groom-left').classList.add('visible');
//       document.querySelector('.bride-groom-right').classList.add('visible');
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleLogin = () => {
//     if (owners[username] === password) {
//       setIsOwner(true);
//       setOwnerName(username); // Set the owner's name
//       navigate(`/dashboard/${username}`);
//     } else {
//       setIsOwner(false);
//       navigate('/userdashboard');
//     }
//   };

//   return (
//     <div className="login-container">
//       <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-left" />
//       <div className="login-form">
//         <h1>Login</h1>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button onClick={handleLogin}>Login</button>
//         <p>Don't have an account? <Link to="/register">Register</Link></p>
//       </div>
//       <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-right" />
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useOwner } from '../context/OwnerContext';
// import '../assets/styles/Login.css';
// import { Link } from 'react-router-dom';

// // Define the credentials
// const owners = {
//   wedplanners: 'password1',
//   marriedly: 'password2',
//   justfun: 'password3',
//   weddays: 'password4',
// };

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { setIsOwner, setOwnerName } = useOwner(); // Make sure to add setOwnerName

//   const handleLogin = () => {
//     if (owners[username] === password) {
//       setIsOwner(true);
//       setOwnerName(username); // Set the owner's name
//       navigate('/dashboard');
//     } else {
//       setIsOwner(false);
//       navigate('/userdashboard');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>Login</h1>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button onClick={handleLogin}>Login</button>
//         <p>Don't have an account? <Link to="/register">Register</Link></p>
//       </div>
//     </div>
//   );
// }

// export default Login;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOwner } from '../context/OwnerContext';
import '../assets/styles/Login.css';
import { Link } from 'react-router-dom';

// Define the credentials
const owners = {
  wedplanners: 'password1',
  marriedly: 'password2',
  justfun: 'password3',
  weddays: 'password4',
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setIsOwner, setOwnerName, setUserDetails } = useOwner();

  const handleLogin = () => {
    if (owners[username] === password) {
      setIsOwner(true);
      setOwnerName(username);
      setUserDetails({ username, password });
      navigate('/dashboard');
    } else {
      setIsOwner(false);
      setUserDetails({ username, password });
      navigate('/userdashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
