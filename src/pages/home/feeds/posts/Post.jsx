import { Avatar } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import React, { useEffect, useState } from "react";
import Comment from "./comment/Comment";
import InputComment from "./comment/InputComment";
import { db } from "config/firebaseConfig";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";

function Post(props) {
  const { postId, profileSrc, username, timestamp, content, imageSrc } = props;

  const user = useSelector(selectorUser);

  // ==================== state ====================
  const [commentsList, setCommentsList] = useState([]);
  const [userComment, setUserComment] = useState("");

  // ============= useEffect ====================
  // load comment
  useEffect(() => {
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setCommentsList(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const handleClickCommentPost = () => {
    // add comment
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .add({
        content: userComment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.name,
        profileSrc: user.profileSrc,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="post post__wrapper">
      <div className="post__header">
        <Avatar src={profileSrc} />
        <div className="post__header__information">
          <h4 className="post__header__information--name">{username}</h4>
          <p className="post__header__information--timestamp">
            {new Date(timestamp?.toDate()).toString()}
          </p>
        </div>
      </div>
      <div className="post__content">
        {content && <p>{content}</p>}
        {imageSrc && <img src={imageSrc} alt="" />}
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
      <div className="comments-list">
        {commentsList &&
          commentsList.map((comment, id) => (
            <Comment
              key={id}
              content={comment.content}
              profileSrc={comment.profileSrc}
              name={comment.username}
              timestamp={comment.timestamp}
            />
          ))}
        <InputComment
          value={userComment}
          setValue={setUserComment}
          onClick={handleClickCommentPost}
        />
      </div>
    </div>
  );
}

export default Post;
