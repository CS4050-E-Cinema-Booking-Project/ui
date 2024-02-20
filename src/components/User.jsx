import React from "react";
import '../style/User.css'
import { Link } from "react-router-dom";
import MovieBox from "./MovieBox";
import ProfilePicture from "../images/pngtree-vintage-film-camera-illustration-vector-on-white-background-png-image_2069935.jpg"

const User = () => {
  return (
    <div className="flex-container">
      <div className="flex-child">
        <img className="profile-picture" src={ProfilePicture} alt="picture"/>
        <h1 className="user-name">John Doe</h1>
        <h3 className="user-desc">
        My favorite movie is Running the Rat Race! I love
        comedy and horror movies, and am looking for recommendations.
        If you want to email me, my email is JohnDoe@gmail.com, feel free
        to message me!
        </h3>
        <Link to="/edit-profile" className='user-button'>Edit Profile</Link>
      </div>
      <div className="order-container">
        <div className="upcoming">
          <h1 className="order-title">Upcoming Orders</h1>
          <div className="upcoming-box">
            <MovieBox />
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