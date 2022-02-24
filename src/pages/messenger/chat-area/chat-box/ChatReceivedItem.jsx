import { Avatar } from "@mui/material";
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { formatRelativeDate } from "utils/formatDate";

function ChatReceivedItem({ message }) {
  const [userSender, setUserSender] = useState({});

  useEffect(() => {
    let unsubscribe = db.collection("users").doc(message.sender).onSnapshot(doc => setUserSender(doc.data()));

    return () => unsubscribe();
  }, [message]);

  return (
    <div className="chat__user row__user">
      <Avatar
        src={userSender?.profileSrc}
        sx={{ width: "35px", height: "35px" }}
      />
      <div className="chat__user__content">
        <h5 className="chat__user__header">{userSender?.name}</h5>
        <div className="row">
          <div className="chat chat__left">
            <div className="chat__detail">
              <p>{message.content}</p>
              <p className="chat__detail--timestamp">
                {formatRelativeDate(message.timestamp.seconds)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatReceivedItem;
