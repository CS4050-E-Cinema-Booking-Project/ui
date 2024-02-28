import React from "react";
import AdminNavbar from "./AdminNavbar";
import UserBox from "./UserBox";
import '../style/Admin.css'

const AdminUser = () => {
  return (
    <div>
        <AdminNavbar />
      <div className="colRight">
        <UserBox id={"1"} name={"Big Boss"} email={"admin@gmail.com"} role={"Admin"} />
        <UserBox id={"2"} name={"John Doe"} email={"johndoe@gmail.com"} role={"User"} />
      </div>
    </div>
  );
};

export default AdminUser;