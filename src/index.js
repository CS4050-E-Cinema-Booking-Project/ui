import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import AdminMovie from "./components/AdminMovie";
import AdminUser from "./components/AdminUser";
import AdminPromo from "./components/AdminPromo";
import User from "./components/User";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin-movie" element={<AdminMovie />} />
          <Route path="/admin-user" element={<AdminUser />} />
          <Route path="/admin-promo" element={<AdminPromo />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)