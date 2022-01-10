import { Avatar, Badge } from "@mui/material";
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";

function ChatHeader({ uid }) {
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    db.collection("users")
      .doc(uid)
      .onSnapshot((snapshot) => setUserDetail(snapshot.data()));
  }, [uid]);

  return (
    <div className="messenger__detail__header">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          src={userDetail?.profileSrc || ""}
          sx={{ width: 56, height: 56 }}
        />
        <div
          className={
            userDetail?.online
              ? `active-user badge-active`
              : `inactive-user badge-active`
          }
        ></div>
      </Badge>
      <h3 className="messenger__detail__header__info">{userDetail?.name}</h3>
    </div>
  );
}

export default ChatHeader;
