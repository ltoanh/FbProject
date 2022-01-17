import { Avatar, Badge, ListItemAvatar, ListItemButton } from "@mui/material";
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";

function MessageItem({ item }) {
  const user = useSelector(selectorUser);

  const [userSender, setUserSender] = useState({});

  useEffect(() => {
    let unsubscribe = db.collection("users").doc(item.uid).onSnapshot(doc => setUserSender(doc.data()));

    return () => unsubscribe();
  }, [item]);

  return (
    <div className={`${item.isSeen === false && 'unseen-message'}`}>
      <ListItemButton>
        <ListItemAvatar>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt={userSender.name} src={userSender.profileSrc} />
            <span
              className={
                userSender.online
                  ? `active-user badge-active`
                  : `inactive-user badge-active`
              }
            ></span>
          </Badge>
        </ListItemAvatar>
        <div className="sidebar__message__content">
          <h5 className="sidebar__message__content--name">{userSender.name}</h5>
          <div className="sidebar__message__preview">
            {item.uidLatestUserMessage === user.uid && <strong>Bạn:</strong>}
            {item.uidLatestUserMessage === user.uid && item.isSeen && (
              <p className="sidebar__message__preview__text">
                {item.latestMessage}
              </p>
            )}
            {item.uidLatestUserMessage !== user.uid && item.isSeen && (
              <>
                <p className="sidebar__message__preview__text">
                  {item.latestMessage}
                </p>
                <Avatar
                  alt={userSender.name}
                  src={userSender.profileSrc}
                  sx={{ width: ".75rem", height: ".75rem" }}
                />
              </>
            )}
            {item.uidLatestUserMessage !== user.uid && !item.isSeen && (
              <Badge color="info" badgeContent="" variant="dot">
                <p className="sidebar__message__preview__text">
                  {item.latestMessage}
                </p>
              </Badge>
            )}
          </div>
        </div>
      </ListItemButton>
    </div>
  );
}

export default MessageItem;
