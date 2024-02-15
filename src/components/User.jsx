import React from "react";
import '../style/User.css'
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="flex-container">
      <div className="flex-child">
        <div className="circle"></div>
        <h1 className="user-name">Name</h1>
        <h3 className="user-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h3>
        <Link to="/edit-profile" className='edit-button'>Edit Profile</Link>
      </div>
      <div className="order-container">
        <div className="upcoming">
          <h1 className="order-title">Upcoming Orders</h1>
          <div className="upcoming-box">
            upcoming
          </div>
        </div>
        <div className="past">
          <h1 className="order-title">Past Orders</h1>
          <div className="past-box">
            past
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;