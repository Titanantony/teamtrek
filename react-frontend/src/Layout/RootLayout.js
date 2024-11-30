import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="auth-layout">
        <Outlet /> {/* Render nested routes here */}
    </div>
  );
};

export default RootLayout;



// import React, { useState } from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import { useAuth } from '../AuthContext'; // Import AuthContext
// import './RootLayout.css';
// import logo from '../images/logo.png';

// const RootLayout = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { isAuthenticated, logout } = useAuth(); // Get auth state

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="Athleticon Logo" className="logo-image" />
//           </Link>
//         </div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           &#9776;
//         </div>
//         <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/classes">Classes</Link></li>
//           {isAuthenticated ? (
//             <>
//               <li><Link to="/dashboard">Dashboard</Link></li>
//               <li><button onClick={logout} className="logout-button">Logout</button></li>
//             </>
//           ) : (
//             <>
//   <li>
//     <Link to="/signUp" className="signup">Join us →</Link>
//   </li>
//   <li>
//     <Link to="/signIn" className="join">Sign-In</Link>
//   </li>
// </>
//           )}
//           <li><a href="#about">About</a></li>
//         </ul>
//       </nav>
//       <main>
//         <Outlet /> {/* React Router renders child routes here */}
//       </main>
//     </div>
//   );
// };

// export default RootLayout;
