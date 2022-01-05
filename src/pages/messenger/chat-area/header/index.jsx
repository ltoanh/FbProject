import { Avatar, Badge } from "@mui/material";
import React from "react";

function ChatHeader() {
  return (
    <div className="messenger__detail__header">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          src="https://images.pexels.com/photos/8265707/pexels-photo-8265707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          sx={{ width: 56, height: 56 }}
        />
        <div
          className={
            1 === 1 ? `active-user badge-active` : `inactive-user badge-active`
          }
        ></div>
      </Badge>
      <h3 className="messenger__detail__header__info">Tu Oanh Le</h3>
    </div>
  );
}

export default ChatHeader;
