
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Navbar from "./components/Navbar";
// import Service from "./components/Service";
// import CreateEvent from "./components/CreateEvent"; // Make sure this is imported

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route exact path='/' element={<Home />} />
//                 <Route exact path='/login' element={<Login />} />
//                 <Route exact path='/register' element={<Register />} />
//                 <Route exact path='/service' element={<Service />} />
//                 <Route exact path='/create-event' element={<CreateEvent />} /> {/* Add this route */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Navbar from "./components/Navbar";
// import Service from "./components/Service";
// import CreateEvent from "./components/CreateEvent";
// import Dashboard from "./components/Dashboard";
// //import Booking from "./components/Booking"; // Placeholder for the booking component

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route exact path='/' element={<Home />} />
//                 <Route exact path='/login' element={<Login />} />
//                 <Route exact path='/register' element={<Register />} />
//                 <Route exact path='/service' element={<Service />} />
//                 <Route exact path='/create-event' element={<CreateEvent />} />
//                 <Route exact path='/dashboard' element={<Dashboard />} />
                
//             </Routes>
//         </Router>
//     );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Navbar from "./components/Navbar";
// import Service from "./components/Service";
// import CreateEvent from "./components/CreateEvent";
// import Dashboard from "./components/Dashboard";
// import OwnerLogin from "./components/OwnerLogin"; // Import OwnerLogin

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route exact path='/' element={<Home />} />
//                 <Route exact path='/login' element={<Login />} />
//                 <Route exact path='/register' element={<Register />} />
//                 <Route exact path='/service' element={<Service />} />
//                 <Route exact path='/create-event' element={<CreateEvent />} />
//                 <Route exact path='/owner-login' element={<OwnerLogin />} /> {/* Added OwnerLogin route */}
//                 <Route exact path='/dashboard/:company' element={<Dashboard />} /> {/* Dynamic dashboard route */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;



// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Navbar from "./components/Navbar";
// import Service from "./components/Service";
// import CreateEvent from "./components/CreateEvent";
// import Dashboard from "./components/Dashboard";

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route exact path='/' element={<Home />} />
//                 <Route exact path='/login' element={<Login />} />
//                 <Route exact path='/register' element={<Register />} />
//                 <Route exact path='/service' element={<Service />} />
//                 <Route exact path='/create-event' element={<CreateEvent />} />
//                 <Route path='/dashboard/:company' element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Navbar from './components/Navbar';
// import Service from './components/Service';
// import CreateEvent from './components/CreateEvent';
// import Dashboard from './components/Dashboard';
// import Cards from './components/Cards';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/service" element={<Service />} />
//         <Route exact path="/create-event" element={<CreateEvent />} />
//         <Route exact path="/dashboard/:username" element={<Dashboard />} />
//         <Route exact path="/cards" element={<Cards />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Navbar from './components/Navbar';
// import Service from './components/Service';
// import CreateEvent from './components/CreateEvent';
// import Dashboard from './components/Dashboard';
// import Cards from './components/Cards';

// const App = () => {
//   const location = useLocation();
//   const isDashboardOrCards = location.pathname.startsWith('/dashboard') || location.pathname === '/cards';

//   return (
//     <Router>
//       {!isDashboardOrCards && <Navbar />}
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/service" element={<Service />} />
//         <Route exact path="/create-event" element={<CreateEvent />} />
//         <Route exact path="/dashboard/:username" element={<Dashboard />} />
//         <Route exact path="/cards" element={<Cards />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Navbar from './components/Navbar';
// import Service from './components/Service';
// import CreateEvent from './components/CreateEvent';
// import Dashboard from './components/Dashboard';
// import Cards from './components/Cards';

// function App() {
//   const location = useLocation();
//   const hideNavbarRoutes = ['/dashboard/:username', '/cards'];
//   const shouldHideNavbar = hideNavbarRoutes.some(route => location.pathname.startsWith(route));

//   return (
//     <Router>
//       {!shouldHideNavbar && <Navbar />}
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/service" element={<Service />} />
//         <Route exact path="/create-event" element={<CreateEvent />} />
//         <Route exact path="/dashboard/:username" element={<Dashboard />} />
//         <Route exact path="/cards" element={<Cards />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import { OwnerProvider } from './context/OwnerContext';

function App() {
  return (
    <Router>
      <OwnerProvider>
        <Main />
      </OwnerProvider>
    </Router>
  );
}

export default App;
