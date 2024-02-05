import React, { useState } from "react";
import "../style/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/user">User</NavLink>
                </li>
                <li>
                    <NavLink to="/admin">Admin</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;