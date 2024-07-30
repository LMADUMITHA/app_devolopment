
// import React from "react";
// import { Link } from "react-router-dom";
// import '../assets/styles/Navbar.css';
// function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">HOME</Link></li>
//                 <li><Link to="/login">LOGIN</Link></li>
//                 <li><Link to="/register">REGISTER</Link></li>
//                 <li><Link to="/service">SERVICE</Link></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import '../assets/styles/Navbar.css';

// function Navbar() {
//     return (
        
//         <nav>
//             <ul>
//                 <li><Link to="/">HOME</Link></li>
//                 <li><Link to="/login">LOGIN</Link></li>
//                 <li><Link to="/register">REGISTER</Link></li>
//                 <li><Link to="/service">SERVICE</Link></li>
//                 <li><Link to="/owner-login">OWNER</Link></li> {/* Added Owner button */}
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css';
import logo from '../assets/styles/logo3.png'; // Adjust the path if necessary

function Navbar() {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="Company Logo" className="logo" />
                <h2>RK EVENTS</h2>
            </div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><Link to="/register">REGISTER</Link></li>
                <li><Link to="/service">SERVICE</Link></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
