import React, { useState } from "react";
import "../style/Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setAuthenticated }, {isAdmin, setAdmin}) => {
  
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setAuthenticated(false);
        navigate("/");
    }

  return (
    <nav>
      <Link to="/" className="title">
        Home
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {isAuthenticated ? (
          <>
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
            <li>
              <button className="signout-button" onClick={handleLogout}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/admin-movie">Admin</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
