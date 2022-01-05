import { Divider } from "@mui/material";
import React from "react";
import './chat-area.css';
import ChatBox from "./chat-box";
import ChatSender from "./chat-sender";
import ChatHeader from "./header";

function ChatArea() {
  return (
    <div className="messenger__detail post__wrapper">
      {/* header */}
      <ChatHeader />
      {/* box */}
      <Divider sx={{ my: 1 }} />
      <ChatBox />
      <Divider sx={{ my: 1 }} />
      {/* input sender */}
      <ChatSender />
    </div>
  );
}

export default ChatArea;
