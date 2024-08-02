
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/styles/Sidebar.css'; // Adjust the path as necessary

// function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-header">
//         <h2>Dashboard</h2>
//       </div>
//       <nav className="sidebar-nav">
//         <Link to="/dashboard/reports" className="sidebar-link">Reports</Link>
//         <Link to="/dashboard/accounts" className="sidebar-link">Accounts</Link>
//         <Link to="/dashboard/status" className="sidebar-link">Status</Link>
//         <Link to="/dashboard/bookings" className="sidebar-link">Bookings</Link>
//         <Link to="/dashboard/description" className="sidebar-link">Description</Link>
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

