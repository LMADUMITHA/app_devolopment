

// import React from 'react';
// import Newbar from './Newbar';
// import Cards from './Cards';
// import TableComponent from './TableComponent';
// import '../assets/styles/DashboardWithCards.css';

// const DashboardWithCards = () => {
//   return (
//     <div className="dashboard-container">
//       <Newbar />
//       <main className="main-content">
//         <div className="cards-section">
//           <Cards />
//         </div>
//         <div className="table-section">
//           <TableComponent />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardWithCards;



// import React from 'react';
// import Newbar from './Newbar';
// import Cards from './Cards';
// import TableComponent from './TableComponent';
// import '../assets/styles/DashboardWithCards.css';

// const DashboardWithCards = ({ companyName }) => {
//   return (
//     <div className="dashboard-container">
//       <Newbar />
//       <main className="main-content">
//         <h1>{companyName} Dashboard</h1> {/* Display company name here */}
//         <div className="cards-section">
//           <Cards />
//         </div>
//         <div className="table-section">
//           <TableComponent />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardWithCards;


// import React from 'react';
// import Newbar from './Newbar';
// import Cards from './Cards';
// import TableComponent from './TableComponent';
// import '../assets/styles/DashboardWithCards.css';

// const DashboardWithCards = ({ companyName }) => {
//   console.log("Company Name:", companyName); // Debugging line

//   return (
//     <div className="dashboard-container">
      
//       <Newbar />
      
//       <main className="main-content">
//       <h1 className="company-name"> Dashboard</h1>
//         <div className="cards-section">
//           <Cards />
//         </div>
//         <div className="table-section">
//           <TableComponent />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardWithCards;



// import React from 'react';
// import Newbar from './Newbar';
// import Cards from './Cards';
// import TableComponent from './TableComponent';
// import '../assets/styles/DashboardWithCards.css';

// const DashboardWithCards = () => {
//   return (
//     <div className="dashboard-container">
//       <Newbar />
//       <main className="main-content">
//         <h1 className="dashboard-title">Dashboard</h1>
//         <div className="cards-section">
//           <Cards />
//         </div>
//         <div className="table-section">
//           <TableComponent />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardWithCards;



import React from 'react';
import Newbar from './Newbar';
import Cards from './Cards';
import TableComponent from './TableComponent';
import '../assets/styles/DashboardWithCards.css';

const DashboardWithCards = () => {
  return (
    <div className="dashboard-container">
      <Newbar />
      <main className="main-content">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="cards-section">
          <Cards />
        </div>
        {/* <div className="table-section">
          <TableComponent />
        </div> */}
      </main>
    </div>
  );
};

export default DashboardWithCards;
