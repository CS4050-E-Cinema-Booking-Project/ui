import React from "react";
import AdminNavbar from "./AdminNavbar";
import '../style/Admin.css'

const AdminUser = () => {
  return (
    <div>
        <AdminNavbar />
      <div className="colRight">
        <h1>Admin User</h1>
      </div>
    </div>
  );
};

export default AdminUser;