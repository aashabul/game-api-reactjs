import React from "react";
import "../ChatRoom.css";
import ChatRoomHeader from "../components/ChatRoomHeader";

const ChatRoom = () => {
  const user = false;
  return (
    <div>
      <ChatRoomHeader />
      {!user && (
        <div id="alert">
          <h2>Please Login to chat</h2>
          <button>login</button>
        </div>
      )}
      <div className="chat-container">
        <div id="inbox">inbox</div>
        <div id="groups">chat groups</div>
      </div>
    </div>
  );
};

export default ChatRoom;
