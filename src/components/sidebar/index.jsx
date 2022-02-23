import SidebarRow from './sidebar-row/SidebarRow';

import PeopleIcon from '@mui/icons-material/People';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TimelapseIcon from '@mui/icons-material/Timelapse';

import React from 'react'
import './sidebar.css';

import {useSelector} from 'react-redux';
import { selectorUser } from "slice/userSlice";

function Sidebar() {
  const user = useSelector(selectorUser);

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <SidebarRow
          src={user.profileSrc}
          title={user?.name}
        />
        <SidebarRow Icon={PeopleIcon} title="Bạn bè" />
        <SidebarRow Icon={SmartDisplayIcon} title="Watch" />
        <SidebarRow Icon={GroupsIcon} title="Nhóm" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={TimelapseIcon} title="Kỷ niệm" />
      </div>
    </div>
  );
}

export default Sidebar
