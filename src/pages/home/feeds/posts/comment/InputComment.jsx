import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import SendIcon from '@mui/icons-material/Send';

function InputComment(props) {
  const user = useSelector(selectorUser);

  const {value, setValue, onClick} = props;

  return (
    <div className="comment comment__input">
      <Avatar src={user.profileSrc} alt={user.name} />
      <input
        className="comment__content"
        type="text"
        placeholder="Nhập bình luận"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <IconButton onClick={onClick}>
        <SendIcon />
      </IconButton>
    </div>
  );
}

export default InputComment;
