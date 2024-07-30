// src/components/DashboardWithCards.js
// import React from 'react';
// import Sidebar from './Sidebar';
// import Cards from './Cards';
// import '../assets/styles/Dashboard.css'; 
// function DashboardWithCards() {
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <main className="main-content">
//        <Cards />
//       </main>
//     </div>
//   );
// }
// export default DashboardWithCards;
// import React from 'react';

// import Cards from './Cards';
// import TableComponent from './TableComponent';
// import '../assets/styles/Dashboard.css';
// import Newbar from './Newbar';

// function DashboardWithCards() {
//   return (
    
//     <div>
//     <Newbar />
//        <main className="main-content">
//          <div className="cards-section">
//            <Cards />
//          </div>
//          <div className="table-section">
//            <TableComponent />
//          </div>
//        </main>

//     </div>
    
    
//   );
// }

// export default DashboardWithCards;



import React from 'react';
import Newbar from './Newbar';
import Cards from './Cards';
import TableComponent from './TableComponent';
// import '../assets/styles/Dashboard.css';
import '../assets/styles/DashboardWithCards.css';
const DashboardWithCards = () => {
  return (
    <div className="dashboard-container">
      <Newbar />
      <main className="main-content">
        <div className="cards-section">
          <Cards />
        </div>
        <div className="table-section">
          <TableComponent />
        </div>
      </main>
    </div>
  );
};

export default DashboardWithCards;
