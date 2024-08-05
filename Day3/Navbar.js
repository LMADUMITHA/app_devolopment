// import React from "react";
// import { Link } from "react-router-dom";
// import '../assets/styles/Navbar.css';
// import logo from '../assets/styles/logo3.png'; // Adjust the path if necessary
// import cartImage from '../assets/styles/cart.png'; // Adjust the path if necessary

// function Navbar() {
//     return (
//         <nav>
//             <div className="logo-container">
//                 <img src={logo} alt="Company Logo" className="logo" />
//                 <h2>RK EVENTS</h2>
//             </div>
//             <ul>
//                 <li><Link to="/">HOME</Link></li>
//                 <li><Link to="/login">LOGIN</Link></li>
//                 <li><Link to="/register">REGISTER</Link></li>
//                 <li><Link to="/service">SERVICE</Link></li>
//             </ul>
//             <div className="cart-container">
//                 <img src={cartImage} alt="Cart" className="cart" />
//             </div>
//         </nav>
//     );
// }

// export default Navbar;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/styles/Navbar.css';
import logo from '../assets/styles/logo3.png'; // Adjust the path if necessary
import cartImage from '../assets/styles/cart.png'; // Adjust the path if necessary

function Navbar() {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart-details');
    };

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
            <div className="cart-container" onClick={handleCartClick}>
                <img src={cartImage} alt="Cart" className="cart" />
            </div>
        </nav>
    );
}

export default Navbar;

