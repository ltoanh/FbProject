import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { db } from "config/firebaseConfig";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import { formatRelativeDate } from "utils/formatDate";
import Comment from "./comment/Comment";
import InputComment from "./comment/InputComment";

const ITEM_HEIGHT = 48;

function Post(props) {
  const {
    postId,
    profileSrc,
    username,
    timestamp,
    content,
    imageSrc,
    setOpenSlackbar,
    uid,
  } = props;

  const user = useSelector(selectorUser);

  // ==================== state ====================
  const [isShowedComment, setIsShowedComment] = useState(false);
  const [commentsList, setCommentsList] = useState([]);
  const [userComment, setUserComment] = useState("");

  // like value
  const [likeId, setLikeId] = useState();
  const [likeNumber, setLikeNumber] = useState(0);
  // comment value
  const [commentNumber, setCommentNumber] = useState(0);

  // ============= useEffect ====================
  // load comment
  useEffect(() => {
    let unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setCommentsList(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });

    return () => unsubscribe();
  }, []);
  // load analysis comment
  useEffect(() => {
    setCommentNumber(commentsList.length);
  }, [commentsList]);
  // show comment
  const handleClickShowComment = () => {
    setIsShowedComment(true);
  };

  // load analysis like
  useEffect(() => {
    let unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("reactions")
      .onSnapshot((snapshot) => {
        setLikeId(snapshot.docs[0]?.id);
        setLikeNumber(snapshot.docs[0]?.data()?.like);
      });
    return () => unsubscribe();
  }, []);
  // like post
  const handleClickLikeNumberPost = () => {
    db.collection("posts")
      .doc(postId)
      .collection("reactions")
      .doc(likeId)
      .update({
        like: likeNumber + 1,
      });

    setLikeNumber(likeNumber + 1);
  };

  const handleClickCommentPost = () => {
    // add comment
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .add({
        content: userComment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user?.name,
        profileSrc: user?.profileSrc,
        like: 0,
      })
      .then(setUserComment(""));
  };

  // post menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPostMenu = Boolean(anchorEl);
  const handleClickPostMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePostMenu = () => {
    setAnchorEl(null);
  };

  // delete post
  const handleClickDeletePost = () => {
    db.collection("posts")
      .doc(postId)
      .delete()
      .then(() => {
        console.log("success");
        setOpenSlackbar(true);
      })
      .catch((err) => console.log(err));

    // setOpenSlackbar(true);
    setAnchorEl(null);
  };

  return (
    <div className="post post__wrapper">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="post__header">
          <Avatar src={profileSrc} />
          <div className="post__header__information">
            <h4 className="post__header__information--name">{username}</h4>
            <p className="post__header__information--timestamp">
              {timestamp && formatRelativeDate(timestamp?.seconds)}
            </p>
          </div>
        </div>
        {/* more action */}
        {uid === user.uid && (
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={openPostMenu ? "long-menu" : undefined}
              aria-expanded={openPostMenu ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClickPostMenu}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={openPostMenu}
              onClose={handleClosePostMenu}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem onClick={handleClickDeletePost} disableRipple>
                <DeleteIcon />
                Xóa
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
      <div className="post__content">
        {content && <div dangerouslySetInnerHTML={{__html: content}} />}
        {imageSrc && <img src={imageSrc} alt="" />}
      </div>
      {/* thong ke */}
      <div className="post__analysis">
        <div className="post__analysis__item">
          <ThumbUpOutlinedIcon color="info" fontSize="small" />
          <span>{likeNumber}</span>
        </div>
        <div className="post__analysis__item">
          <span>{commentNumber} bình luận</span>
        </div>
      </div>
      {/* hanh dong */}
      <div className="post__features border-y">
        <div onClick={handleClickLikeNumberPost} className="post__option">
          <ThumbUpOutlinedIcon />
          <span>Thích</span>
        </div>
        <div onClick={handleClickShowComment} className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <span>Bình luận</span>
        </div>
        <div className="post__option">
          <ReplyOutlinedIcon />
          <span>Chia sẻ</span>
        </div>
      </div>
      {/* comment */}
      {isShowedComment && (
        <div className="comments-list">
          {commentsList &&
            commentsList.map((comment) => (
              <Comment
                key={comment.id}
                commentId={comment.id}
                postId={postId}
                comment={comment.data}
              />
            ))}
          <InputComment
            value={userComment}
            setValue={setUserComment}
            onClick={handleClickCommentPost}
          />
        </div>
      )}
    </div>
  );
}

export default Post;
