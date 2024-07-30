// function Description(){
//     return(
//         <div>
//             <h1>HELLO</h1>
//         </div>
//     )
// }




// export default Description;
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import '../assets/styles/Description.css';

// const Description = () => {
//   const { id } = useParams();

//   return (
//     <div className="description-container">
//       <div className="black">
//         <h1 className="glow-text">TRIVIAL ARTS</h1>
//         <h1>Trivial arts / Photography / Planners</h1>
//         <h2>We specialize in planning, implementing, managing,</h2>
//         <h2> make any event a success and you will want to work with us again</h2>
//       </div>
//     </div>
//   );
// };

// export default Description;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import '../assets/styles/Description.css';
// import cartoonImage from '../assets/styles/groom.png'; // Import your cartoon image

// const Description = () => {
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
//     </div>
//   );
// };

// export default Description;



import AboutUs from "./Aboutus";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

import Goldbox from "./Goldbox";
import Imagegrid from "./Imagegrid";
function Description(){
  return (
    <div>
      <Goldbox />
      <Imagegrid />
      <AboutUs />
      <ContactPage />
      
      <Footer />
    </div>
  )
}

export default Description;