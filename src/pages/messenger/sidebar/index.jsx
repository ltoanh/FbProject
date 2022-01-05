import React from "react";
import "./message-sidebar.css";
import MessageItem from "./MessageItem";
import MessageSidebarHeader from "./MessageSidebarHeader";

function MessageSidebar() {

  const connectedUsers = [
    {
      uid: "12324asdfkhjsdka9o2834",
      name: "Le Tu Oanh",
      profileSrc:
        "https://lh3.googleusercontent.com/a-/AOh14GghJtdvKlCin6cYlPd4uGH86FGR59cnyngTF_Hwng=s96-c",
      online: true,
      latestMessage: "Oke nhe!",
      isYourLatestMessenger: false,
      isSeen: false,
    },
    {
      uid: "12324asdfk4534resfdtre4",
      name: "Le",
      profileSrc:
        "https://images.pexels.com/photos/8265707/pexels-photo-8265707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      online: false,
      latestMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fuga omnis fugit soluta alias modi quo at! Sed fuga voluptas obcaecati, nobis et dicta est fugiat tempore a veritatis exercitationem!",
      isYourLatestMessenger: true,
      isSeen: true,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper contact post__wrapper messenger__sidebar">
        <MessageSidebarHeader />
        {connectedUsers.map((item) => (
          <MessageItem item={item} key={item.uid} />
        ))}
      </div>
    </div>
  );
}

export default MessageSidebar;
