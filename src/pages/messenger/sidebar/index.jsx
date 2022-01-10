import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectorUser } from "slice/userSlice";
import "./message-sidebar.css";
import MessageItem from "./MessageItem";
import MessageSidebarHeader from "./MessageSidebarHeader";

function MessageSidebar() {
  const user = useSelector(selectorUser);

  const [connectedUsersItem, setConnectedUsersItem] = useState([]);
  // load message
  useEffect(() => {
    let unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("messenger")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setConnectedUsersItem(snapshot.docs.map((doc) => doc.data()))
      );

    return () => unsubscribe();
  }, [user]);

  // useEffect(() => {
  //   console.log(connectedUsersItem);
  // }, [connectedUsersItem]);

  return (
    <div className="sidebar">
      <div className="contact post__wrapper messenger__sidebar">
        <MessageSidebarHeader />
        {connectedUsersItem.map((item) => (
          <NavLink
            to={`/messenger/t/${item.uid}`}
            key={item.uid}
            className="messenger__item__wrapper"
          >
            <MessageItem item={item} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MessageSidebar;
