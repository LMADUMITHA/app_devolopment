
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useOwner } from '../context/OwnerContext';
// import '../assets/styles/Login.css';
// import brideGroomImage from '../assets/styles/bride.png'; // Import the image
// import { Link } from 'react-router-dom';
// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { setIsOwner } = useOwner();

//   useEffect(() => {

//     const timer = setTimeout(() => {
//       document.querySelector('.bride-groom-left').classList.add('visible');
//       document.querySelector('.bride-groom-right').classList.add('visible');
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleLogin = () => {
//     const isOwnerLogin = (username === 'owner1' && password === 'password1');

//     if (isOwnerLogin) {
//       setIsOwner(true);
//       navigate(`/dashboard/${username}`);
//     } else {
//       setIsOwner(false);
//       navigate('/service');
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
//         <p>Don't have an account?</p><Link to="/register">Register</Link>
//       </div>
//       <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-right" />
//     </div>
//   );
// }

// export default Login;





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOwner } from '../context/OwnerContext';
import '../assets/styles/Login.css';
import brideGroomImage from '../assets/styles/bride.png'; // Import the image
import { Link } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setIsOwner } = useOwner();

  useEffect(() => {

    const timer = setTimeout(() => {
      document.querySelector('.bride-groom-left').classList.add('visible');
      document.querySelector('.bride-groom-right').classList.add('visible');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    const isOwnerLogin = (username === 'owner1' && password === 'password1');

    if (isOwnerLogin) {
      setIsOwner(true);
      navigate(`/dashboard/${username}`);
    } else {
      setIsOwner(false);
      navigate('/userdashboard');
    }
  };

  return (
    <div className="login-container">
      <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-left" />
      <div className="login-form">
        <h1>LOGIN</h1>
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
        <p>Don't have an account?</p><Link to="/register">Register</Link>
      </div>
      <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-right" />
    </div>
  );
}

export default Login;
