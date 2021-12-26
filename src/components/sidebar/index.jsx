import SidebarRow from './sidebar-row/SidebarRow';

import PeopleIcon from '@mui/icons-material/People';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TimelapseIcon from '@mui/icons-material/Timelapse';

import React from 'react'
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/259773888_995292871049938_6670390183133644059_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JwJwnJscaKcAX_TzU_I&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_QK3jYCNFGxtHSHR_0y7uupPHmis34fC_YXB_PVmKFIw&oe=61CCCFB7"
        title="Tú Oanh"
      />
      <SidebarRow Icon={PeopleIcon} title="Bạn bè" />
      <SidebarRow Icon={SmartDisplayIcon} title="Watch" />
      <SidebarRow Icon={GroupsIcon} title="Nhóm" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={TimelapseIcon} title="Kỷ niệm" />
    </div>
  );
}

export default Sidebar
