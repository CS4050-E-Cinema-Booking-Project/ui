import React, { useEffect, useState } from "react";
import '../style/User.css'
import { Link, useNavigate } from "react-router-dom";
import MovieBox from "./MovieBox";
import PastBox from "./PastBox";
import ProfilePicture from "../images/pngtree-vintage-film-camera-illustration-vector-on-white-background-png-image_2069935.jpg"
import Inception from "../images/s-l1600.jpg"
import Troy from "../images/71P64ggfReL.jpg"
import axios from "axios";


const User = () => {

  const userId = localStorage.getItem("token");

  const api = axios.create({
    baseURL: 'http://localhost:8000'
  });

  const [currUserInfo, setCurrUserInfo] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseUser = await api.get('/users/');
    const user = responseUser.data.find(user => user.id == userId);

    const responseCard = await api.get('/paymentCards/');
    const card = responseCard.data.find(card => card.userID == userId);

    navigate("/edit-profile",{state: {userData: user, paymentData: card}})
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users/');
        const user = response.data.find(user => user.id == userId);
        if (user) {
          setCurrUserInfo({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password
          });
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if (userId) {
      fetchUsers();
    }
  }, [userId]);

  return (
    <div className="flex-container">
      <div className="flex-child">
        <img className="profile-picture" src={ProfilePicture} alt="picture" />
        <h1 className="user-name">{currUserInfo.firstName + " " + currUserInfo.lastName}</h1>

        <button className='user-button' onClick={handleSubmit}>Edit Profile</button>
      </div>
      <div className="order-container">
        <div className="upcoming">
          <h1 className="order-title">Upcoming Orders</h1>
          <div className="upcoming-box">
            <MovieBox image={Inception} title={"Inception"} date={"Saturday"} time={"3PM"} tickets={"3"} seats={"A4 B6 C2"} />
          </div>
        </div>
        <div className="past">
          <h1 className="order-title">Past Orders</h1>
          <div className="past-box">
            <PastBox image={Troy} title={"Troy"} date={"Sunday"} time={"8PM"} tickets={"1"} seats={"B4"} />
            <PastBox image={Inception} title={"Inception"} date={"Saturday"} time={"3PM"} tickets={"3"} seats={"A4 B6 C2"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;