// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Dashboard = () => {
//   const { state } = useLocation();
//   const { event } = state;

//   return (
//     <div>
//       <h1>{event.name} Dashboard</h1>
//       <p>Here you can manage your bookings and view event details.</p>
//       {/* Implement dashboard functionality here */}
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.js


// import React from 'react';
// import { useLocation, useParams } from 'react-router-dom';

// const Dashboard = () => {
//   const { company } = useParams();
//   const location = useLocation();
//   const { state } = location;
//   const { company: companyName } = state || { company: company };

//   return (
//     <div>
//       <h1>{companyName} Dashboard</h1>
//       {/* Add your company-specific dashboard content here */}
//     </div>
//   );
// };

// export default Dashboard;





// src/components/Dashboard.js
// src/components/Dashboard.js
// src/components/Dashboard.js

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Dashboard = () => {
//   const location = useLocation();
//   const { user } = location.state || {};

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {user && (
//         <div>
//           <h2>Welcome, {user.username}</h2>
//           <p>Company: {user.username}'s Company</p>
//           {/* Add more dashboard details here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// Dashboard.js

// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const Dashboard = () => {
//   const history = useHistory();
//   const userType = localStorage.getItem('userType');
//   const companyId = localStorage.getItem('companyId');

//   if (userType !== 'owner') {
//     history.push('/login');
//     return null; // Prevent rendering
//   }

//   const company = { name: 'Sample Company', details: 'Company details here.' };

//   if (!company) {
//     return <div>Company not found.</div>;
//   }
// sss
//   return (
//     <div className="dashboard-container">
//       <h1>{company.name}</h1>
//       <p>{company.details}</p>
//     </div>
//   );
// };

// export default Dashboard;


// Dashboard.js



// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const userType = localStorage.getItem('userType'); // Get user type from localStorage
//   const companyId = localStorage.getItem('companyId'); // Get company ID from localStorage

//   // If user type is not 'owner', redirect to login page
//   if (userType !== 'owner') {
//     navigate('/login');
//     return null; // Prevent rendering
//   }

//   // Fetch company data based on companyId (Placeholder logic)
//   const company = { name: 'Sample Company', details: 'Company details here.' };

//   if (!company) {
//     return <div>Company not found.</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <h1>{company.name}</h1>
//       <p>{company.details}</p>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Dummy data for example
// const companies = [
//   { id: '1', name: 'THEJU WEDDING PLANNERS', details: 'Wedding planning services' },
//   { id: '2', name: 'REENA EVENTS', details: 'Event management services' },
//   // Add more companies here
// ];

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [company, setCompany] = useState(null);
//   const userType = localStorage.getItem('userType'); // Get user type from localStorage
//   const companyId = localStorage.getItem('companyId'); // Get company ID from localStorage

//   useEffect(() => {
//     if (userType !== 'owner') {
//       navigate('/login');
//       return;
//     }

//     // Fetch company data based on companyId (Placeholder logic)
//     const fetchedCompany = companies.find(c => c.id === companyId);
//     setCompany(fetchedCompany);

//   }, [userType, companyId, navigate]);

//   if (userType !== 'owner') {
//     return null; // This should not happen due to redirect
//   }

//   if (!company) {
//     return <div>Company not found.</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <h1>{company.name}</h1>
//       <p>{company.details}</p>
//     </div>
//   );
// };

// export default Dashboard;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const userType = localStorage.getItem('userType'); // Get user type from localStorage
//   const company = localStorage.getItem('company'); // Get company name from localStorage

//   // If user type is not 'owner', redirect to login page
//   if (userType !== 'owner') {
//     navigate('/login');
//     return null; // Prevent rendering
//   }

//   if (!company) {
//     return <div>Company not found.</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <h1>{company}</h1>
//       <p>Company details here.</p>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const Dashboard = () => {
//     const { username } = useParams();
//     const [company, setCompany] = useState(null);
//     const navigate = useNavigate();
//     const userType = localStorage.getItem('userType'); // Get user type from localStorage

//     useEffect(() => {
//         if (userType !== 'owner') {
//             navigate('/login');
//             return;
//         }

//         // Simulate fetching company data
//         const companyData = {
//             'owner1': { name: 'THEJU WEDDING PLANNERS', details: 'Wedding planning services' },
//             'owner2': { name: 'REENA EVENTS', details: 'Event management services' }
//         };

//         if (companyData[username]) {
//             setCompany(companyData[username]);
//         } else {
//             setCompany(null);
//         }
//     }, [username, userType, navigate]);

//     if (!company) {
//         return <div>Company not found or unauthorized access.</div>;
//     }

//     return (
//         <div className="dashboard-container">
//             <h1>{company.name}</h1>
//             <p>{company.details}</p>
//         </div>
//     );
// };

// export default Dashboard;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css';

const Dashboard = () => {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);

  const toggleReports = () => setIsReportsOpen(!isReportsOpen);
  const toggleAccounts = () => setIsAccountsOpen(!isAccountsOpen);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <div className="sidebar-section">
            <button className="section-toggle" onClick={toggleReports}>
              <Link to='/cards'>Reports</Link>
            </button>
            {isReportsOpen && <div className="sidebar-content">Reports Content</div>}
          </div>
          <div className="sidebar-section">
            <button className="section-toggle" onClick={toggleAccounts}>
              Accounts
            </button>
            {isAccountsOpen && <div className="sidebar-content">Accounts Content</div>}
          </div>
        </nav>
      </aside>
      <main className="main-content">
        {/* Add main content here */}
      </main>
    </div>
  );
}

export default Dashboard;
