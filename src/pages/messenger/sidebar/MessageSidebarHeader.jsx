import { Search } from "@mui/icons-material";
import { Avatar, Badge, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";

function MessageSidebarHeader() {
  const user = useSelector(selectorUser);

  return (
    <div className="sidebar__header">
      <div className="row">
        <h2 className="sidebar__header--title">Chat</h2>
        <Badge badgeContent={4} color="error">
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
