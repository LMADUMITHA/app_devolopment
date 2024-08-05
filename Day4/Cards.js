


// import React from 'react';
// import '../assets/styles/Cards.css';

// const Cards = () => {
//   const courses = [
//     { title: "This month booking", info: "45" },
//     { title: "Total users", info: "28" },
//     { title: "Annual package", info: "<5L" },
//     { title: "Edit description", info: "Edit description" },
//     { title: "Total no.of events", info: "35" },
//     { title: "Star ratings", info: ">4" }
//   ];

//   return (
//     <div className="cards-container">
//       {courses.map((course, index) => (
//         <div className="card" key={index}>
//           <div className="card-title">{course.title}</div>
//           <button className="card-info-button">{course.info}</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cards;


import React from 'react';
import '../assets/styles/Cards.css';

const Cards = () => {
  const metrics = [
    { title: "This Month's Bookings", info: "45" },
    { title: "Total Users", info: "28" },
    { title: "Annual Package", info: "<5L" },
    { title: "Edit Description", info: "Edit description" },
    { title: "Total Events", info: "35" },
    { title: "Star Ratings", info: ">4" }
  ];

  return (
    <div className="dashboard-cards-container">
      {metrics.map((metric, index) => (
        <div className="dashboard-card" key={index}>
          <div className="dashboard-card-title">{metric.title}</div>
          <button className="dashboard-card-info-button">{metric.info}</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
