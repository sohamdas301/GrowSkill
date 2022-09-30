import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Join = () => {
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo"></img>
        <h1>Join Chat</h1>
        <input placeholder="Enter Your Name" type="text" id="joinInput" />
        <Link to="/chat">
          <button className="joinbtn">LogIn</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
