import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';

import React from 'react'
import './message-sender.css';

function MessageSender() {
  const profile = {
    src:
      "https://images.pexels.com/photos/8265707/pexels-photo-8265707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Tú Oanh",
  };

  return (
    <div className='message-sender post__wrapper'>
      <div className="status">
        <Avatar src={profile.src} />
        <input className='status__input' type="text" placeholder={`${profile.name}, bạn đang nghĩ gì thế?`}/>
      </div>
      <div className="post__features">
        <div className="post__option">
          <VideocamIcon style={{color: "red"}}/>
          <h4>Video trực tiếp</h4>
        </div>
        <div className="post__option">
          <PhotoLibraryIcon style={{color: "#41B35D"}}/>
          <h4>Ảnh/Video</h4>
        </div>
        <div className="post__option">
          <MoodIcon style={{color: "#EAB026"}}/>
          <h4>Cảm xúc/Hoạt động</h4>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
