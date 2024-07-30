
// import React from 'react';
// import '../assets/styles/Cards.css';

// const Cards = () => {
//   const courses = [
//     { title: "This month booking", date: "04.11.2022" },
//     { title: "Total users", date: "04.11.2022" },
//     { title: "Annual package ", date: "04.11.2022" },
//     { title: "Edit description", date: "04.11.2022" },
//     { title: "Total no.of events", date: "30.11.2022" },
//     { title: "Star ratings", date: "30.11.2022" }
//   ];

//   return (
//     <div className="ag-format-container">
//       <div className="ag-courses_box">
//         {courses.map((course, index) => (
//           <div className="ag-courses_item" key={index}>
//             <a href="#" className="ag-courses-item_link">
//               <div className="ag-courses-item_bg"></div>
//               <div className="ag-courses-item_title">
//                 {course.title}
//               </div>
//               {course.date && (
//                 <div className="ag-courses-item_date-box">
//                   Start:
//                   <span className="ag-courses-item_date">
//                     {course.date}
//                   </span>
//                 </div>
//               )}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;


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
//           <div className="card-info">{course.info}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cards;



import React from 'react';
import '../assets/styles/Cards.css';

const Cards = () => {
  const courses = [
    { title: "This month booking", info: "45" },
    { title: "Total users", info: "28" },
    { title: "Annual package", info: "<5L" },
    { title: "Edit description", info: "Edit description" },
    { title: "Total no.of events", info: "35" },
    { title: "Star ratings", info: ">4" }
  ];

  return (
    <div className="cards-container">
      {courses.map((course, index) => (
        <div className="card" key={index}>
          <div className="card-title">{course.title}</div>
          <button className="card-info-button">{course.info}</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
