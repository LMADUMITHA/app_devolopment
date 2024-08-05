

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addUser } from '../data/users'; // Ensure the path is correct
// import '../assets/styles/Register.css'; // Ensure the CSS file is correctly linked
// import brideGroomImage from '../assets/styles/bride.png';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       document.querySelector('.bride-groom-left').classList.add('visible');
//       document.querySelector('.bride-groom-right').classList.add('visible');
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Add user and navigate
//     addUser(username, password, email);
//     navigate('/login'); // Redirect to login page after successful registration
//   };

//   return (
//     <div className="register-container">
//       <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-left" />
//       <img src={brideGroomImage} alt="Bride and Groom" className="bride-groom bride-groom-right" />
//       <form onSubmit={handleRegister} className="register-form">
//         <h2>Register</h2>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           placeholder="Username"
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           placeholder="Email"
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           placeholder="Password"
//         />
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//           placeholder="Confirm Password"
//         />
//         {error && <div className="error-message">{error}</div>}
//         <button type="submit">Register</button>
//         <p>
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../data/users'; // Ensure the path is correct
import '../assets/styles/Register.css'; // Ensure the CSS file is correctly linked

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // This effect is optional and can be removed if not needed
    const timer = setTimeout(() => {
      document.querySelector('.register-form').classList.add('visible');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Add user and navigate
    addUser(username, password, email);
    navigate('/login'); // Redirect to login page after successful registration
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Register</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Username"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm Password"
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
