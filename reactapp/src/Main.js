
// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Navbar from './components/Navbar';
// import Service from './components/Service';
// import CreateEvent from './components/CreateEvent';
// import DashboardWithCards from './components/DashboardWithCards';
// import Description from './components/Description'; // Import Description

// import { useOwner } from './context/OwnerContext';

// function Main() {
//   const location = useLocation();
//   const { isOwner } = useOwner();
//   const hideNavbar = isOwner && location.pathname.includes('/dashboard');

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/service" element={<Service />} />
//         <Route exact path="/create-event" element={<CreateEvent />} />
//         <Route exact path="/dashboard/:username" element={<DashboardWithCards />} />
//         <Route path="/description/:id" element={<Description />} /> {/* Update this line */}
//       </Routes>
//     </>
//   );
// }

// export default Main;


// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Navbar from './components/Navbar';
// import Service from './components/Service';
// import CreateEvent from './components/CreateEvent';
// import DashboardWithCards from './components/DashboardWithCards';
// import Description from './components/Description';
// import { useOwner } from './context/OwnerContext';
// import Userdashboard from './components/Userdashboard';
// import List from './components/List';

// function Main() {
//   const location = useLocation();
//   const { isOwner } = useOwner();

//   // Determine if the Navbar should be hidden
//   const hideNavbar = isOwner && location.pathname.includes('/dashboard') || location.pathname.includes('/userdashboard');

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/service" element={<Service />} />
//         <Route exact path="/create-event" element={<CreateEvent />} />
//         <Route exact path="/dashboard/:username" element={<DashboardWithCards />} />
//         <Route exact path="/userdashboard" element={<Userdashboard />} />
//         <Route exact path="/list/:id" element={<List />} />
//         <Route path="/description/:id" element={<Description />} />
//       </Routes>
//     </>
//   );
// }

// export default Main;
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Service from './components/Service';
import CreateEvent from './components/CreateEvent';
import DashboardWithCards from './components/DashboardWithCards';
import Description from './components/Description';
import { useOwner } from './context/OwnerContext';
import Userdashboard from './components/Userdashboard';
// import List from './components/List';  // Ensure correct import
import Sample from './components/Sample';

function Main() {
  const location = useLocation();
  const { isOwner } = useOwner();

  // Determine if the Navbar should be hidden
  const hideNavbar = isOwner && (location.pathname.includes('/dashboard') || location.pathname.includes('/userdashboard'));

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/dashboard/:username" element={<DashboardWithCards />} />
        <Route path="/userdashboard" element={<Userdashboard />} />
        <Route path="/sample" element={<Sample />} />  

        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </>
  );
}

export default Main;
