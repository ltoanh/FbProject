import MoodIcon from "@mui/icons-material/Mood";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import {
  Avatar,
  Button
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import "./message-sender.css";
import StatusModal from './status-modal/StatusModal';

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
          <div className="post__option" onClick={handleOpen}>
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