import React from "react";
import AdminNavbar from "./AdminNavbar";
import PromoBox from "./PromoBox";
import '../style/Admin.css'

const AdminPromo = () => {
  return (
    <div>
        <AdminNavbar />
      <div className="colRight">
        <PromoBox id={"1"} description={"New users receive 20% off first ticket purchase"} status={"active"}/>
        <PromoBox id={"2"} description={"15% off orders of 3 tickets or more"} status={"active"}/>
        <PromoBox id={"3"} description={"Free additional ticket with purchase of one ticket to Inception"} status={"inactive"}/>
      </div>
    </div>
  );
};

export default AdminPromo;