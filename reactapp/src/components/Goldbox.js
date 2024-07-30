
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import '../assets/styles/Goldbox.css';
// import cartoonImage from '../assets/styles/groom.png'; // Import your cartoon image

// const Goldbox = () => {
//   const { id } = useParams();

//   return (
//     <div className="description-container">
//       <div className="content">
//         <img src={cartoonImage} alt="Cartoon" className="cartoon-image" />
//         <div className="black">
//           <h1 className="glow-text">TRIVIAL ARTS</h1>
//           <h1>Trivial arts / Photography / Planners</h1>
//           <h2>We specialize in planning, implementing, managing,</h2>
//           <h2> make any event a success and you will want to work with us again</h2>
//         </div>
//       </div>
//       <div>
//         <h1>HELLO</h1>
//       </div>
//     </div>
//   );
// };

// export default Goldbox;


import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/Goldbox.css';
import cartoonImage from '../assets/styles/groom.png'; // Import your cartoon image

const Goldbox = () => {
  const { id } = useParams();

  return (
    <div className="description-container">
      <div className="content">
        <img src={cartoonImage} alt="Cartoon" className="cartoon-image" />
        <div className="black">
          <h1 className="glow-text">TRIVIAL ARTS</h1>
          <h1>Trivial arts / Photography / Planners</h1>
          <h2>We specialize in planning, implementing, managing,</h2>
          <h2>make any event a success and you will want to work with us again</h2>
        </div>
      </div>
      <div className="glow-text">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    
       <h1>SOME OF OUR PORTFOLIOS</h1>
       
      </div>
    </div>
  );
};

export default Goldbox;
