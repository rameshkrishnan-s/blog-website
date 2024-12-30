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
          <a href="/write" className="action-link">Write</a>
          <button className="action-button signup">Sign Up</button>
          <button className="action-button signin">Sign In</button>
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
