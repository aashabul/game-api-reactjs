import React from "react";
import "../ChatRoomHeader.css";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ChatRoomHeader = () => {
  const { handleSignOut, user } = useAuth();

  return (
    <div className="chat-header">
      <div className="user">
        {user.photoURL ? (
          <img id="google-photo" src={user.photoURL} alt="profile" />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
          />
        )}
        {user.email ? (
          <h2 id="username">{user.displayName}</h2>
        ) : (
          <h2>CHAT ROOM</h2>
        )}
      </div>
      {user.email ? (
        <button onClick={handleSignOut}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span id="logout-text"> Logout</span>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChatRoomHeader;
