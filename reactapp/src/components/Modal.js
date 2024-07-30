// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/styles/Modal.css';

// const Modal = ({ event, onClose }) => {
//     const [isOwner, setIsOwner] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleOwnerLogin = () => {
//         // Replace with actual authentication logic
//         if (username === 'owner' && password === 'password') {
//             navigate('/dashboard', { state: { event } });
//         } else {
//             alert('Invalid username or password');
//         }
//     };

//     return (
//         <div className="modal-overlay">
//             <div className="modal">
//                 {!isOwner ? (
//                     <>
//                         <h2>Are you a Client or an Owner?</h2>
//                         <button onClick={onClose}>Client</button>
//                         <button onClick={() => setIsOwner(true)}>Owner</button>
//                     </>
//                 ) : (
//                     <>
//                         <h2>Owner Login</h2>
//                         <div className="owner-login">
//                             <input
//                                 type="text"
//                                 placeholder="Username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <button onClick={handleOwnerLogin}>Login</button>
//                         </div>
//                         <button className="close-button" onClick={onClose}>
//                             Cancel
//                         </button>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Modal;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/styles/Modal.css';
// const Modal = ({ event, onClose }) => {
//   const [userType, setUserType] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Logic to check username and password
//     // For simplicity, assume all usernames and passwords are valid
//     if (userType === 'owner') {
//       navigate('/dashboard'); // Replace with the actual route for the dashboard
//     } else {
//       navigate('/booking'); // Replace with the actual route for client booking
//     }
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>{event.title}</h2>
//         <p>{event.description}</p>
//         <button onClick={() => setUserType('client')}>I am a Client</button>
//         <button onClick={() => setUserType('owner')}>I am an Owner</button>
//         {userType === 'owner' && (
//           <div>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         )}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;


// import React, { useState } from 'react';
// import '../assets/styles/Service.css';
// import Modal from './Modal'; // Ensure this is correctly imported

// const events = [
//   {
//     name: 'THEJU WEDDING PLANNERS',
//     image: 'https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600',
//     title: 'Event 1',
//     description: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.',
//   },
//   // Add more events here as needed
// ];

// const Service = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleCardClick = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="service-container">
//       <h1>OUR COMPANIES</h1>
//       {events.map((event) => (
//         <div key={event.name} className="flip" onClick={() => handleCardClick(event)}>
//           <div className="front" style={{ backgroundImage: `url(${event.image})` }}>
//             <h3 className="text-shadow">{event.name}</h3>
//           </div>
//           <div className="back">
//             <h2>{event.title}</h2>
//             <p>{event.description}</p>
//           </div>
//         </div>
//       ))}
//       {isModalOpen && selectedEvent && (
//         <Modal event={selectedEvent} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default Service;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Modal.css';

const Modal = ({ event, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(null); // 'client' or 'owner'
  const navigate = useNavigate();

  // Define credentials for each event based on their index or unique ID
  const credentials = {
    0: { owner: { username: 'owner1', password: 'password1' }, client: {} },
    1: { owner: { username: 'owner2', password: 'password2' }, client: {} },
    2: { owner: { username: 'owner3', password: 'password3' }, client: {} },
    3: { owner: { username: 'owner4', password: 'password4' }, client: {} },
    4: { owner: { username: 'owner5', password: 'password5' }, client: {} },
    5: { owner: { username: 'owner6', password: 'password6' }, client: {} },
  };

  const handleLogin = () => {
    const eventIndex = event.index; // Ensure you have an index or unique identifier for each event
    const correctCredentials = credentials[eventIndex];

    if (userType === 'owner') {
      if (username === correctCredentials.owner.username && password === correctCredentials.owner.password) {
        navigate('/dashboard', { state: { event } });
      } else {
        alert('Incorrect username or password');
      }
    } else if (userType === 'client') {
      navigate('/client-page', { state: { event } });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        {!userType && (
          <div className="modal-buttons">
            <button onClick={() => setUserType('client')} className="modal-button">I am a Client</button>
            <button onClick={() => setUserType('owner')} className="modal-button">I am an Owner</button>
          </div>
        )}
        {userType && (
          <div className="owner-login">
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
