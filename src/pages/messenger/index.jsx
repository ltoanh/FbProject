import withAuth from "hooks/withAuth";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MessengerRoutes from "routes/MessengerRoutes";
import "./messenger.css";
import MessageSidebar from "./sidebar";

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

export default withAuth(Messenger);
