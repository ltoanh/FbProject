import React from "react";
import ChatArea from "./chat-area";
import MessageSidebar from "./sidebar";
import "./messenger.css";

function Messenger() {
  return (
    <div className="app__content messenger">
      {/* left sidebar */}
      <MessageSidebar />
      {/* content */}
      <ChatArea />
    </div>
  );
}

export default Messenger;
