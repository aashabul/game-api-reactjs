import React from "react";
import "../ChatRoomHeader.css";

const chatRoomHeader = () => {
  return (
    <div className="chat-header">
      <div className="user">
        <h2>username</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt="profile"
        />
      </div>
      <button>Logout</button>
    </div>
  );
};

export default chatRoomHeader;
