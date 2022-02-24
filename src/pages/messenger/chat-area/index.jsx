import { Divider } from "@mui/material";
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectorMessengerPreview } from "slice/messengerPreviewSlice";
import { selectorUser } from "slice/userSlice";
import "./chat-area.css";
import firebase from "firebase";
import ChatBox from "./chat-box";
import ChatSender from "./chat-sender";
import ChatHeader from "./header";

function ChatArea() {
  const previewMessage = useSelector(selectorMessengerPreview);
  const user = useSelector(selectorUser);

  const { id } = useParams();

  const [mID, setMID] = useState("");
  const [messenger, setMessenger] = useState([]);
  const [messengerUserPreview, setMessengerUserPreview] = useState({});

  // load preview
  useEffect(() => {
    if (previewMessage) {
      setMessengerUserPreview(
        previewMessage.filter((messenger) => messenger.uid === id)[0]
      );
    }
  }, [previewMessage, id]);
  // update seen message
  useEffect(() => {
    if (messengerUserPreview) {
      if (
        messengerUserPreview.uidLatestUserMessage !== user.uid &&
        messengerUserPreview.isSeen === false
      ) {
        db.collection("users")
          .doc(user.uid)
          .collection("messenger")
          .doc(id)
          .update({
            isSeen: true,
            timestamp: firebase.firestore.Timestamp.now(),
          });
      }
    }
  }, [messengerUserPreview]);

  // load mID
  useEffect(() => {
    let unsubscribe = db
      .collection("users")
      .doc(user?.uid)
      .collection("messenger")
      .doc(id)
      .onSnapshot((snapshot) => setMID(snapshot.data()?.messenger));
    return () => unsubscribe();
  }, [id, user]);
  // load messenger
  useEffect(() => {
    if (mID) {
      let unsubscribe = db
        .collection("messenger")
        .doc(mID)
        .onSnapshot(
          (snapshot) => setMessenger(snapshot.data()),
          (err) => console.log("mess err: " + err)
        );
      return () => unsubscribe();
    }
  }, [mID]);

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
        <ChatSender messenger={messenger} />
      </div>
    </div>
  );
}

export default ChatArea;
