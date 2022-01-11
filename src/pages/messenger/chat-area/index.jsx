import { Divider } from "@mui/material";
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectorUser } from "slice/userSlice";
import "./chat-area.css";
import ChatBox from "./chat-box";
import ChatSender from "./chat-sender";
import ChatHeader from "./header";

function ChatArea() {
  const user = useSelector(selectorUser);
  const { id } = useParams();

  const [messenger, setMessenger] = useState([]);

  // load message
  useEffect(() => {
    let unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("messenger")
      .doc(id)
      .onSnapshot(
        (snapshot) => {
          let mID = snapshot.data().messenger;
          db.collection("messenger")
            .doc(mID)
            .onSnapshot(
              (snapshot) => setMessenger(snapshot.data()),
              (err) => console.log("mess err: " + err)
            );
        },
        (err) => console.log("err: " + err)
      );

    return () => unsubscribe();
  }, [id, user]);

  useEffect(() => {
    console.log(messenger);
  }, [messenger]);

  return (
    <div className="messenger__detail post__wrapper">
      {/* header */}
      <div className="messenger__wrapper__header">
        <ChatHeader uid={id} />
        {/* box */}
        <Divider sx={{ my: 1 }} />
      </div>
      <ChatBox messenger={messenger} />
      <div className="messenger__wrapper__sender">
        <Divider sx={{ my: 1 }} />
        {/* input sender */}
        <ChatSender messenger={messenger}/>
      </div>
    </div>
  );
}

export default ChatArea;
