import React from "react";
import Header from "./Header";
import Movies from "./Movies";
import AdminNavbar from "./AdminNavbar";
import '../style/Admin.css'

const AdminMovie = () => {
  return (
    <div>
        <AdminNavbar />
      <div className="colRight">
        <Movies />
      </div>
    </div>
  );
};

export default AdminMovie;