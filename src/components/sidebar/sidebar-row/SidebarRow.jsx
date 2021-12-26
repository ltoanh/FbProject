import { Avatar } from '@mui/material';
import React from 'react'
import './sidebar-row.css';

function SidebarRow(props) {
  const {title, src, Icon} = props;

  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
