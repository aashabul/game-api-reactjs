import React, { useState } from "react";
import "../ChatRoom.css";
import ChatRoomHeader from "../components/ChatRoomHeader";
import useAuth from "../hooks/useAuth";

const ChatRoom = () => {
  const { signInWithGoogle, user } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <ChatRoomHeader />
      {!user.email && (
        <div id="alert">
          <h2>Please Login to chat</h2>
          <button onClick={handleGoogleSignIn}>login</button>
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
