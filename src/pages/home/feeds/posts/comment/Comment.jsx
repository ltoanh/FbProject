import { Avatar, Badge, Button, Chip, IconButton, Stack } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoodIcon from "@mui/icons-material/Mood";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";
import "./comment.css";

function Comment(props) {
  const { profileSrc, name, content, timestamp } = props;

  return (
    <div className="comment">
      <Avatar src={profileSrc} alt={name} />
      <div className="comment__detail">
        <div className="comment__content">
          <h5 className="comment__content__name">{name}</h5>
          <p className="comment__content__detail">{content}</p>
        </div>
        <div className="comment__features">
          <Stack direction="row" spacing={1}>
            <Chip
              icon={<ThumbUpIcon />}
              color="info"
              label="2"
              variant="outlined"
              clickable
            />
            <Chip
              icon={<FavoriteIcon />}
              color="error"
              label="3"
              variant="outlined"
              clickable
            />
            <Chip
              icon={<MoodIcon />}
              color="warning"
              label="4"
              variant="outlined"
              clickable
            />
            <Chip
              icon={<MoodBadIcon />}
              color="warning"
              label="1"
              variant="outlined"
              clickable
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Comment;
