import { Avatar } from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

import React from "react";

function Post(props) {
  const { profileSrc, username, timestamp, content, imageSrc } = props;

  return (
    <div className="post post__wrapper">
      <div className="post__header">
        <Avatar src={profileSrc} />
        <div className="post__header__information">
          <h4 className="post__header__information--name">{username}</h4>
          <p className="post__header__information--timestamp">{new Date(timestamp?.toDate()).toString()}</p>
        </div>
      </div>
      <div className="post__content">
        {
          content && <p>{content}</p>
        }
        {
          imageSrc && <img src={imageSrc} alt="" />
        }
      </div>
      <div className="post__features border-y">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <span>Thích</span>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <span>Bình luận</span>
        </div>
        <div className="post__option">
          <ReplyOutlinedIcon />
          <span>Chia sẻ</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
