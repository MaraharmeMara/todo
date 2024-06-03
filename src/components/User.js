import React from "react";
import logo from "../img/logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Signin/SignIn";
import SignUp from "../Signin/SignUp";

function User() {
  return (
    <div className="user">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>ToDo App</p>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/login" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default User;
