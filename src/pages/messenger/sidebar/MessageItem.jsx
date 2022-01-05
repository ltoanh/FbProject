import { Avatar, Badge, ListItemAvatar, ListItemButton } from "@mui/material";
import React from "react";


function MessageItem({item}) {
  return (
    <ListItemButton>
      <ListItemAvatar>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt={item.name} src={item.profileSrc} />
          <span
            className={
              item.online
                ? `active-user badge-active`
                : `inactive-user badge-active`
            }
          ></span>
        </Badge>
      </ListItemAvatar>
      <div className="sidebar__message__content">
        <h5 className="sidebar__message__content--name">{item.name}</h5>
        <div className="sidebar__message__preview">
          {item.isYourLatestMessenger && <strong>Bạn:</strong>}
          {item.isYourLatestMessenger && item.isSeen && (
            <>
              <p className="sidebar__message__preview__text">
                {item.latestMessage}
              </p>
              <Avatar
                alt={item.name}
                src={item.profileSrc}
                sx={{ width: ".75rem", height: ".75rem" }}
              />
            </>
          )}
          {!item.isYourLatestMessenger && item.isSeen && (
            <p className="sidebar__message__preview__text">
              {item.latestMessage}
            </p>
          )}
          {!item.isYourLatestMessenger && !item.isSeen && (
            <Badge color="info" badgeContent="" variant="dot">
              <p className="sidebar__message__preview__text">
                {item.latestMessage}
              </p>
            </Badge>
          )}
        </div>
      </div>
    </ListItemButton>
  );
}

export default MessageItem;
