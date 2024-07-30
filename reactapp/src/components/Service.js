
// import React from 'react';
// import '../assets/styles/Service.css';



// const Service = () => {
//   return (
    
//     <div className="service-container">
//      <h1>OUR COMPANIES</h1>
//       <div className="flip">
//         <div
//           className="front"
//           style={{ backgroundImage: "url(https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600)" }}
//         >
//           <h3 className="text-shadow">THEJU WEDDING PLANNERS</h3>
//         </div>
//         <div className="back">
//           <h2>event 1</h2>
//           <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
//         </div>
//       </div>
//       <div className="flip">
//         <div
//           className="front"
//           style={{ backgroundImage: "url(https://images.pexels.com/photos/17315419/pexels-photo-17315419/free-photo-of-a-wedding-venue-decorated-with-white-flowers.jpeg?auto=compress&cs=tinysrgb&w=600)" }}
//         >
//           <h3 className="text-shadow">REENA EVENTS</h3>
//         </div>
//         <div className="back">
//           <h2>Event 2</h2>
//           <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
//         </div>
//       </div>
      
//       <div className="flip">
//         <div
//           className="front"
//           style={{ backgroundImage: "url(https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600)" }}
//         >
//           <h3 className="text-shadow">SID EVENTS</h3>
//         </div>
//         <div className="back">
//           <h2>Event 3</h2>
//           <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
//         </div>
//       </div>
//       <br></br>
//       <div className="flip">
//         <div
//           className="front"
//           style={{ backgroundImage: "url(https://images.pexels.com/photos/169185/pexels-photo-169185.jpeg?auto=compress&cs=tinysrgb&w=600)" }}
//         >
//           <h3 className="text-shadow">ROCKY EVENTS</h3>
//         </div>
//         <div className="back">
//           <h2>event 4</h2>
//           <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
//         </div>
//       </div>
      

      
//       <div className="flip">
//         <div
//           className="front"
//           style={{ backgroundImage: "url(https://images.pexels.com/photos/5778892/pexels-photo-5778892.jpeg?auto=compress&cs=tinysrgb&w=600)" }}
//         >
//           <h3 className="text-shadow">GUNA CELEBS</h3>
//         </div>
//         <div className="back">
//           <h2>Event 5</h2>
//           <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
//         </div>
//       </div>
      
//       <div className="flip">
//         <div
//           className="front"
//           style={{ backgroundImage: "url(https://images.pexels.com/photos/17931474/pexels-photo-17931474/free-photo-of-flower-arrangements-and-a-birthday-cake-in-a-reception-hall.jpeg?auto=compress&cs=tinysrgb&w=600)" }}
//         >
//           <h3 className="text-shadow">RADHI EVENTS</h3>
//         </div>
//         <div className="back">
//           <h2>event 6</h2>
//           <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
//         </div>
//       </div>
      
//     </div>
    

    
//   );
// };

// export default Service;


// import React, { useState } from 'react';
// import '../assets/styles/Service.css';
// import Modal from './Modal'; // Modal component

// const events = [
//   {
//     name: 'THEJU WEDDING PLANNERS',
//     image: 'https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600',
//     title: 'Event 1',
//     description: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.',
//   },
  
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
//       {isModalOpen && <Modal event={selectedEvent} onClose={closeModal} />}
//     </div>
//   );
// };

// export default Service;


// import React from 'react';
// import '../assets/styles/Service.css';

// const events = [
//   { index: 0, name: 'THEJU WEDDING PLANNERS', image: 'https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event 1', description: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.' },
//   { index: 1, name: 'REENA EVENTS', image: 'https://images.pexels.com/photos/17315419/pexels-photo-17315419/free-photo-of-a-wedding-venue-decorated-with-white-flowers.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event 2', description: 'Experience the best with our event organizing services.' },
//   { index: 2, name: 'SID EVENTS', image: 'https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event 3', description: 'Transforming your event dreams into reality.' },
//   { index: 3, name: 'ROCKY EVENTS', image: 'https://images.pexels.com/photos/169185/pexels-photo-169185.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event 4', description: 'Expertly planned events for every occasion.' },
//   { index: 4, name: 'GUNA CELEBS', image: 'https://images.pexels.com/photos/5778892/pexels-photo-5778892.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event 5', description: 'Creating memorable experiences with a touch of elegance.' },
//   { index: 5, name: 'RADHI EVENTS', image: 'https://images.pexels.com/photos/17931474/pexels-photo-17931474/free-photo-of-flower-arrangements-and-a-birthday-cake-in-a-reception-hall.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Event 6', description: 'The perfect event starts with the right organizers.' },
// ];

// const Service = () => {
//   return (
//     <div className="service-container">
//       <h1>OUR COMPANIES</h1>
//       {events.map((event) => (
//         <div key={event.index} className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front" style={{ backgroundImage: `url(${event.image})` }}>
//               <h3 className="text-shadow">{event.name}</h3>
//             </div>
//             <div className="flip-card-back">
//               <h2>{event.title}</h2>
//               <p>{event.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Service;


// src/components/Service.js
// src/components/Service.js
// import React from 'react';
// import { events } from '../data/events';
// import '../assets/styles/Service.css';

// const Service = () => {
//   return (
//     <div className="service-container">
//       <h1>OUR COMPANIES</h1>
//       {events.map((event) => (
//         <div key={event.index} className="flip">
//           <div className="front" style={{ backgroundImage: `url(${event.image})` }}>
//             <h3 className="text-shadow">{event.name}</h3>
//           </div>
//           <div className="back">
//             <h2>{event.title}</h2>
//             <p>{event.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Service;

import Company from "./Company";
import HorizontalCarousel from "./HorizontalCarousel ";
function Service(){
  return(
    <div>
      <Company />
      
    </div>
  )
}

export default Service;