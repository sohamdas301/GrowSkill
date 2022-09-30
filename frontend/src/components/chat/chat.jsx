import React, { useEffect, useState } from "react";
// import { user } from "../Join/Join";
// import socketIo from "socket.io-client";
import "./chat.css";
import sendLogo from "../../images/send.png";
// import Message from "./Message";
// import ReactScrollToBottom from "react-scroll-to-bottom";
// import closeIcon from "../../images/closeIcon.png";

const Chat = () => {
  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <div className="chatBox"></div>
        <div className="inputBox">
          <input type="text" id="chatInput"></input>
          <button className="sendBtn">
            <img src={sendLogo} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
