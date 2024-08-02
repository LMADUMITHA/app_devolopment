





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
// import Booking from './components/Booking';  // Import the Booking component
// import Payment from './components/Payment';  // Import the Payment component

// function Main() {
//   const location = useLocation();
//   const { isOwner } = useOwner();

//   // Determine if the Navbar should be hidden
//   const hideNavbar = isOwner && (location.pathname.includes('/dashboard') || location.pathname.includes('/userdashboard'));

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/create-event" element={<CreateEvent />} />
//         <Route path="/dashboard/:username" element={<DashboardWithCards />} />
//         <Route path="/userdashboard" element={<Userdashboard />} />
//         <Route path="/list" element={<List />} />
//         <Route path="/booking/:id" element={<Booking />} />
//         <Route path="/payment/:id" element={<Payment />} />
//         <Route path="/description/:id" element={<Description />} />
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
// import Booking from './components/Booking';
// import Payment from './components/Payment';

// function Main() {
//   const location = useLocation();
//   const { isOwner } = useOwner();

//   // Determine if the Navbar should be hidden
//   const hideNavbar = isOwner && (location.pathname.includes('/dashboard') || location.pathname.includes('/userdashboard'));

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/create-event" element={<CreateEvent />} />
//         <Route path="/dashboard/:username" element={<DashboardWithCards />} />
//         <Route path="/userdashboard" element={<Userdashboard />} />
//         <Route path="/list" element={<List />} />
//         <Route path="/booking/:id" element={<Booking />} />
//         <Route path="/payment/:id" element={<Payment />} />
//         <Route path="/description/:id" element={<Description />} />
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
// import Booking from './components/Booking';
// import Payment from './components/Payment';

// function Main() {
//   const location = useLocation();
//   const { isOwner, ownerName } = useOwner();

//   // Determine if the Navbar should be hidden
//   const hideNavbar = isOwner && (location.pathname.includes('/dashboard') || location.pathname.includes('/userdashboard'));

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/create-event" element={<CreateEvent />} />
//         <Route path="/dashboard/:companyName" element={<DashboardWithCards companyName={ownerName} />} />
//         <Route path="/userdashboard" element={<Userdashboard />} />
//         <Route path="/list" element={<List />} />
//         <Route path="/booking/:id" element={<Booking />} />
//         <Route path="/payment/:id" element={<Payment />} />
//         <Route path="/description/:id" element={<Description />} />
//       </Routes>
//     </>
//   );
// }

// export default Main;


// import React from 'react';
// import { Routes, Route, useLocation, useParams } from 'react-router-dom';
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
// import Booking from './components/Booking';
// import Payment from './components/Payment';

// function Main() {
//   const location = useLocation();
//   const { isOwner } = useOwner();

//   // Determine if the Navbar should be hidden
//   const hideNavbar = isOwner && (location.pathname.includes('/dashboard') || location.pathname.includes('/userdashboard'));

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/create-event" element={<CreateEvent />} />
//         <Route path="/dashboard/:companyName" element={<DashboardWithCardsWrapper />} />
//         <Route path="/userdashboard" element={<Userdashboard />} />
//         <Route path="/list" element={<List />} />
//         <Route path="/booking/:id" element={<Booking />} />
//         <Route path="/payment/:id" element={<Payment />} />
//         <Route path="/description/:id" element={<Description />} />
//       </Routes>
//     </>
//   );
// }

// // Wrapper to extract companyName from URL params and pass it to DashboardWithCards
// const DashboardWithCardsWrapper = () => {
//   const { companyName } = useParams();
//   return <DashboardWithCards companyName={companyName} />;
// };

// export default Main;



import React from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
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
import List from './components/List';
import Booking from './components/Booking';
import Payment from './components/Payment';

function Main() {
  const location = useLocation();
  const { isOwner } = useOwner();

  // Determine if the Navbar should be hidden
  const hideNavbar = (isOwner && location.pathname.includes('/dashboard')) || location.pathname.includes('/userdashboard');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/dashboard/:companyName" element={<DashboardWithCardsWrapper />} />
        <Route path="/userdashboard" element={<Userdashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </>
  );
}

// Wrapper to extract companyName from URL params and pass it to DashboardWithCards
const DashboardWithCardsWrapper = () => {
  const { companyName } = useParams();
  return <DashboardWithCards companyName={companyName} />;
};

export default Main;
