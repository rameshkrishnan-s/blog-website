import { Link } from "react-router-dom";  // Import Link from React Router for navigation

import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo-link">BLOGER</a>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>

        <div className="navbar-actions">
          <Link to="/write" className="action-link">Write</Link>  {/* Corrected to Link for React Router */}
          <Link to="/Login" className="action-button signup">Login</Link>  {/* Updated to navigate to signup page */}
          <Link to="/Register" className="action-button signin">Register</Link>  {/* Updated to navigate to signin page */}
          <div className="profile-menu">
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="profile-pic"
            />  
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
