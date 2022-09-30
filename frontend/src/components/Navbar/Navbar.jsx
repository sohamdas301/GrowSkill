import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">GrowSkill</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/student" className="student">
          <li>student</li>
        </Link>
        <Link to="/teacher" className="teacher">
          <li>Teacher</li>
        </Link>
        <Link to="/admin" className="admin">
          <li>Admin</li>
        </Link>
        {/* <Link to="/socialworker" className="admin">
          <li>SW</li>
        </Link> */}
        <Link to="/signin" className="signin">
          <li>signin</li>
        </Link>
        <Link to="/signup" className="signup">
          <li>Register</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;