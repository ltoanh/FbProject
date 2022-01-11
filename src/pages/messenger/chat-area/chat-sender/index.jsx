import { TextareaAutosize } from "@mui/material";
import { db } from "config/firebaseConfig";
import firebase from "firebase";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectorUser } from "slice/userSlice";

function ChatSender({ messenger }) {
  const user = useSelector(selectorUser);
  const { id } = useParams();

  const [messageContent, setMessageContent] = useState("");

  const updateMessageUserPreview = (mid) => {
    db.collection("users").doc(user.uid).collection("messenger").doc(id).set({
      isSeen: true,
      latestMessage: messageContent,
      messenger: mid,
      timestamp: firebase.firestore.Timestamp.now(),
      uid: id,
      uidLatestUserMessage: user.uid,
    });

    db.collection("users").doc(id).collection("messenger").doc(user.uid).set({
      isSeen: false,
      latestMessage: messageContent,
      messenger: mid,
      timestamp: firebase.firestore.Timestamp.now(),
      uid: user.uid,
      uidLatestUserMessage: user.uid,
    });
  };

  const updateMessengerCollection = (mid) => {
    if (messenger) {
      db.collection("messenger")
        .doc(mid)
        .update({
          message: [
            ...messenger.message,
            {
              sender: user.uid,
              timestamp: firebase.firestore.Timestamp.now(),
              content: messageContent,
            },
          ],
        });
    }
  };

  const addMessengerCollection = () => {
    db.collection("messenger")
      .add({
        member: [user.uid, id],
        message: [
          {
            sender: user.uid,
            timestamp: firebase.firestore.Timestamp.now(),
            content: messageContent,
          },
        ],
        mid: "",
      })
      .then((ref) => {
        // store preview in users/messenger
        db.collection("messenger").doc(ref.id).update({
          mid: ref.id,
        });

        updateMessageUserPreview(ref.id);
      });
  };

  const handleSendMessage = (e) => {
    // enter to send
    // shift enter to new line
    if (e.key === "Enter" && !e.shiftKey) {
      // prevent enter new line
      e.preventDefault();

      if (messenger?.message) {
        updateMessengerCollection(messenger.mid);
      } else {
        addMessengerCollection();
      }

      setMessageContent("");
      return;
    }
    setMessageContent(e.target.value);
  };

  return (
    <div className="messenger__sender">
      <TextareaAutosize
        minRows={1}
        placeholder="Aa"
        value={messageContent}
        onChange={handleSendMessage}
        onKeyPress={handleSendMessage}
        maxRows={4}
        style={{
          width: "100%",
          border: "1px solid #ebebeb",
          padding: ".5rem 1.25rem",
          borderRadius: "25px",
          backgroundColor: "#eff2f5",
        }}
      />
    </div>
  );
}

export default ChatSender;
