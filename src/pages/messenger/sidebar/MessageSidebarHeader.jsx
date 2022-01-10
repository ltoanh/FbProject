import { Search } from "@mui/icons-material";
import { Avatar, Badge, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";

function MessageSidebarHeader({messageList}) {
  const user = useSelector(selectorUser);

  const [unreadNumber, setUnreadNumber] = useState();

  // count unread message
  useEffect(() => {
    let number = messageList.reduce((total, message) => !message.isSeen ? total + 1 : total, 0);

    setUnreadNumber(number);
  }, [messageList]);

  return (
    <div className="sidebar__header">
      <div className="row">
        <h2 className="sidebar__header--title">Chat</h2>
        <Badge badgeContent={unreadNumber} color="error">
          <Avatar
            src={user.profileSrc}
            sx={{ width: "30px", height: "30px" }}
            alt={user.name}
          />
        </Badge>
      </div>
      <div className="search">
        <Search />
        <input type="text" placeholder="Tìm kiếm người dùng" />
      </div>
      <Divider sx={{ my: 1 }} />
    </div>
  );
}

export default MessageSidebarHeader;
