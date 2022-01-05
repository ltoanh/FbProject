import { TextareaAutosize } from "@mui/material";
import React from "react";

function ChatSender() {
  return (
    <div className="messenger__sender">
      <TextareaAutosize
        minRows={1}
        placeholder="Aa"
        maxRows={4}
        style={{
          width: "100%",
          border: "1px solid #ebebeb",
          padding: ".5rem 1.25rem",
          borderRadius: "25px",
          backgroundColor: "#eff2f5",
        }}
      />
    </div>
  );
}

export default ChatSender;
