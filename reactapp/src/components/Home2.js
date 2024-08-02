//  import React from 'react';
//  import '../assets/styles/Home2.css'; // Ensure this file contains your background video styles

//  function Home2() {
//   return (
//     <div className="home-container">
//       <div className="background-video">
//          <video autoPlay muted loop>
//            <source src="https://videos.pexels.com/video-files/3831835/3831835-sd_960_506_25fps.mp4" type="video/mp4" />
//            Your browser does not support the video tag.
//          </video>
//        </div>
//        <div className="content">
//          <h1>RK CELEBS</h1>
//        </div>
//      </div>
//    );
//  }

//  export default Home2;

// import React from 'react';
// import '../assets/styles/Home2.css'; // Ensure this file contains your background video styles

// function Home2() {
//   return (
//     <div className="home-container">
//       <div className="background-video">
//         <video autoPlay muted loop>
//           <source src="https://videos.pexels.com/video-files/3831835/3831835-sd_960_506_25fps.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <p className='txt'>RK CELEBS</p>
//       </div>
      
//     </div>
//   );
// }

// export default Home2;




import React from 'react';
import '../assets/styles/Home2.css'; 
import backgroundImage from '../assets/styles/2.jpg'; 

function Home2() {
  return (
    <div className="home-container">
      <div className="background-image">
        <img src={backgroundImage} alt="Background" />
        <p className='txt'>RK CELEBS</p>
        <p className='txtt'>CELEBRATE YOUR HAPPINESS</p>
      </div>
    </div>
  );
}

export default Home2;
