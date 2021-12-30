import {
  Avatar,
  Box,
  Button,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";

import React, { useState } from "react";
import "./message-sender.css";

import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import { db } from "config/firebaseConfig";
import firebase from "firebase";

function MessageSender() {
  const user = useSelector(selectorUser);
  // modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StatusModal open={open} handleClose={handleClose} />
      <div className="message-sender post__wrapper">
        <div className="status">
          <Avatar src={user.profileSrc} />
          <Button
            variant="text"
            onClick={handleOpen}
          >{`${user.name}, bạn đang nghĩ gì thế?`}</Button>
        </div>
        <div className="post__features">
          <div className="post__option">
            <VideocamIcon style={{ color: "red" }} />
            <h4>Video trực tiếp</h4>
          </div>
          <div className="post__option">
            <PhotoLibraryIcon style={{ color: "#41B35D" }} />
            <h4>Ảnh/Video</h4>
          </div>
          <div className="post__option">
            <MoodIcon style={{ color: "#EAB026" }} />
            <h4>Cảm xúc/Hoạt động</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSender;

const StatusModal = ({ open, handleClose }) => {
  const user = useSelector(selectorUser);

  const [disable, setDisable] = useState(true);

  const [statusValue, setStatusValue] = useState("");

  const handleChangeStatusValue = (e) => {
    let value = e.target.value;
    setStatusValue(value);

    if (value !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const resetStatusModal = () => {
    setStatusValue("");
    setDisable(true);
    handleClose();
  };

  // post status
  const handleClickPostStatus = () => {
    db.collection("posts").add({
      content: statusValue,
      imageSrc: "",
      profileSrc: user.profileSrc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.name,
    });

    resetStatusModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tạo bài viết
        </Typography>
        <TextareaAutosize
          minRows={3}
          placeholder="Bạn đang nghĩ gì thế?"
          maxRows={10}
          style={{ width: "100%", border: "1px solid #ebebeb"}}
          value={statusValue}
          onChange={handleChangeStatusValue}
        />
        <Button
          onClick={handleClickPostStatus}
          variant="contained"
          disabled={disable}
          style={{ width: "100%" }}
        >
          Đăng bài
        </Button>
      </Box>
    </Modal>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
