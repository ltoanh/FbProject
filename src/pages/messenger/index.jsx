import React from "react";
import ChatArea from "./chat-area";
import MessageSidebar from "./sidebar";
import "./messenger.css";
import { BrowserRouter } from "react-router-dom";
import MessengerRoutes from "routes/MessengerRoutes";

function Messenger() {
  return (
    <div className="app__content messenger">
      {/* content */}
      <BrowserRouter>
      {/* left sidebar */}
        <MessageSidebar />
        <MessengerRoutes />
      </BrowserRouter>
    </div>
  );
}

export default Messenger;
