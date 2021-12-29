import SidebarRow from './sidebar-row/SidebarRow';

import PeopleIcon from '@mui/icons-material/People';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TimelapseIcon from '@mui/icons-material/Timelapse';

import React from 'react'
import './sidebar.css';

function Sidebar() {
  const profile = {
    profileSrc:
      "https://images.pexels.com/photos/8265707/pexels-photo-8265707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    profileName: "Tú Oanh",
  };

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <SidebarRow
          src={profile.profileSrc}
          title={profile.profileName}
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
