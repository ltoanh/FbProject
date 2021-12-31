import { Avatar, Chip, Stack } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React, { useEffect, useState } from "react";
import "./comment.css";
import { db } from "config/firebaseConfig";

function Comment(props) {
  const { comment, commentId, postId } = props;

  const [likeCommentValue, setLikeCommentValue] = useState(0);
  
  const handleClickLikeComment = () => {
    db.collection("posts").doc(postId).collection("comments").doc(commentId).update({
      like: likeCommentValue + 1 
    });

    setLikeCommentValue(likeCommentValue + 1);
  }

  useEffect(() => {
    setLikeCommentValue(comment.like);
  }, []);

  return (
    <div className="comment">
      <Avatar src={comment.profileSrc} alt={comment.username} />
      <div className="comment__detail">
        <div className="comment__content">
          <h5 className="comment__content__name">{comment.username}</h5>
          <p className="comment__content__detail">{comment.content}</p>
        </div>
        <div className="comment__features">
          <Stack direction="row" spacing={1}>
            <Chip
              icon={<ThumbUpIcon />}
              color="info"
              label={likeCommentValue}
              variant="outlined"
              clickable
              onClick={handleClickLikeComment}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Comment;
