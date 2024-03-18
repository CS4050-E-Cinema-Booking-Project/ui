import React, { useState, useEffect} from "react";
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./components/Signup";
import SignupConfirm from "./components/SignupConfirm";
import SignupComplete from "./components/SignupComplete";
import Home from "./components/Home";
import Login from "./components/Login";
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AdminMovie from "./components/AdminMovie";
import AdminUser from "./components/AdminUser";
import AdminPromo from "./components/AdminPromo";
import User from "./components/User";
import EditProfile from "./components/EditProfile";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import CheckoutConfirm from "./components/CheckoutConfirm";
import PurchaseTickets from "./components/PurchaseTickets";
import MovieAboutPage from "./components/MovieAboutPage";
import OrderSummary from "./components/OrderSummary";

function App() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navbar isAuthenticated={authenticated} setAuthenticated={setAuthenticated}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password/:id" element={<ResetPassword/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-confirm" element={<SignupConfirm />} />
          <Route path="/signup-complete" element={<SignupComplete />} />
          <Route path="/user" element={<User />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/purchase-tickets/:id" element={<PurchaseTickets />} />
          <Route path="/purchase-summary" element={<OrderSummary />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/checkout-confirm" element={<CheckoutConfirm />} />
          <Route path="/admin-movie" element={<AdminMovie />} />
          <Route path="/admin-user" element={<AdminUser />} />
          <Route path="/admin-promo" element={<AdminPromo />} />
          <Route path="movie-info/:id" element={<MovieAboutPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)