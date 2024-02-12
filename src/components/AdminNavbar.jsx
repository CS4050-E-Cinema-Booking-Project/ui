import React from "react";
import "../style/AdminNavbar.css";
import { Link } from "react-router-dom";
import '../style/Admin.css'

const AdminNavbar = () => {
    return (
        <div>
            <div className="sidenav">
                <Link to="/admin-movie" className='admin-link'>Manage Movies</Link>
                <Link to="/admin-user" className='admin-link'>Manage Users</Link>
                <Link to="/admin-promo" className='admin-link'>Manage Promos</Link>
            </div>
        </div>
    );
};

export default AdminNavbar;