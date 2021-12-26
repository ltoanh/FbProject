import React from "react";
import "./header.css";

import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { Avatar, IconButton } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";

function Header() {
  const profile = {
    profileSrc: 'https://images.pexels.com/photos/8265707/pexels-photo-8265707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    profileName: 'Tú Oanh',
  }

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
          <Avatar src={profile.profileSrc}/>
          <h4>{profile.profileName}</h4>
        </div>

        <IconButton>
          <ForumRounded />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
