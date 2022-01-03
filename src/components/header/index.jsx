import { ForumRounded, Logout } from "@mui/icons-material";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearUserInformation, selectorUser } from "slice/userSlice";
import { updateInActiveUser } from "utils/updateOnlineUser";
import { clearUserCredentialStorage } from "utils/userCredential";
import "./header.css";

function Header() {
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  // logout
  const handleClickLogOut = () => {
    clearUserCredentialStorage();
    updateInActiveUser(user.uid);

    dispatch(clearUserInformation());
  };

  return (
    <div className="header">
      <div className="header__left">
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png"
            alt="fb logo"
          />
        </NavLink>
        <div className="header__input">
          <SearchIcon />
          <input
            type="text"
            name="search-user"
            placeholder="Tìm kiếm trên facebook"
          />
        </div>
      </div>
      <div className="header__middle">
        <NavLink exact to="/" className="header__option">
          <HomeOutlinedIcon fontSize="large" />
        </NavLink>
        <NavLink to="/friends" className="header__option">
          <PeopleOutlinedIcon fontSize="large" />
        </NavLink>
        <NavLink to="/watch" className="header__option">
          <SmartDisplayOutlinedIcon fontSize="large" />
        </NavLink>
        <NavLink to="/pages" className="header__option">
          <FlagOutlinedIcon fontSize="large" />
        </NavLink>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.profileSrc} />
          <h4>{user.name}</h4>
        </div>

        <NavLink to="/messenger/t" exact>
          <IconButton>
            <ForumRounded />
          </IconButton>
        </NavLink>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Tooltip title="Đăng xuất">
          <IconButton onClick={handleClickLogOut}>
            <Logout />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
