// // src/components/Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <h2>Dashboard</h2>
//       <nav>
//         <div className="sidebar-section">
//           <Link to="/dashboard/reports">Reports</Link>
//         </div>
//         <div className="sidebar-section">
//           <Link to="/dashboard/accounts">Accounts</Link>
//         </div>
//         <div className="sidebar-section">
//            Status
//         </div>
//         <div className="sidebar-section">
//            Bookings
//         </div>
//         <div className="sidebar-section">
//            Description
//         </div>
        

//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar.css'; // Adjust the path as necessary

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard/reports" className="sidebar-link">Reports</Link>
        <Link to="/dashboard/accounts" className="sidebar-link">Accounts</Link>
        <Link to="/dashboard/status" className="sidebar-link">Status</Link>
        <Link to="/dashboard/bookings" className="sidebar-link">Bookings</Link>
        <Link to="/dashboard/description" className="sidebar-link">Description</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
