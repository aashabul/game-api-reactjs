import React from "react";
import "../ChatRoomHeader.css";
import useAuth from "../hooks/useAuth";

const ChatRoomHeader = () => {
  const { handleSignOut, signInWithGoogle, user } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="chat-header">
      <div className="user">
        {user.email ? <h2>{user.displayName}</h2> : <h2>CHAT ROOM</h2>}

        {user.photoURL ? (
          <img id="google-photo" src={user.photoURL} alt="profile" />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
            alt="profile"
          />
        )}
      </div>
      {user.email ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        // <button onClick={handleGoogleSignIn}>Login</button>
        <></>
      )}
    </div>
  );
};

export default ChatRoomHeader;
