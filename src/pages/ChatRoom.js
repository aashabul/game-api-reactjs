import React, { useEffect, useState } from "react";
import "../ChatRoom.css";
import ChatRoomHeader from "../components/ChatRoomHeader";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase/firebase.init";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth } from "../firebase/firebase.init";

const ChatRoom = () => {
  const { signInWithGoogle, user, loading } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    // const messageRef = query(q, orderBy("createdAt"), limit(50));
    const messageSubscription = onSnapshot(q, (querySnapshot) => {
      const list = [];
      // setMessages(querySnapshot.docs.map((doc) => doc.data()));
      // setMessages(list);
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setMessages(list);
    });
    return messageSubscription;
  }, []);
  // console.log(messages);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const sendText = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        text: text,
        photo: user.photoURL,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ChatRoomHeader />
      {!user.email && !loading && (
        <div id="alert">
          <h2>Please Login to chat</h2>
          <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
      )}
      <div className="chat-container">
        <div id="inbox">
          {messages.map(({ text, photo, createdAt, uid }) => (
            <div
              key={createdAt}
              className={`text ${
                uid === auth.currentUser?.uid ? "sent" : "received"
              }`}
            >
              <img src={photo} alt="" />
              <p>{text}</p>
            </div>
          ))}
          <form onSubmit={sendText}>
            <input
              type="text"
              placeholder="Message..."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                console.log(text);
              }}
            />
            <button type="submit">send</button>
          </form>
          <div></div>
        </div>
        <div id="groups">chat groups</div>
      </div>
    </div>
  );
};

export default ChatRoom;
