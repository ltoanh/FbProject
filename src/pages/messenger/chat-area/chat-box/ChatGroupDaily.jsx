import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import ChatItem from "./ChatItem";
import ChatReceivedItem from "./ChatReceivedItem";

function ChatGroupDaily({ messageByDate }) {
  const user = useSelector(selectorUser);

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // console.log(messageByDate);
    setMessageList(messageByDate.message_list);
  }, [messageByDate]);

  return (
    <>
      <Divider style={{ fontSize: ".75rem" }}>
        {messageByDate.date.toString()}
      </Divider>
      {messageList.map((message, idx) =>
        message.sender === user.uid ? <ChatItem key={idx} message={message}/> : <ChatReceivedItem key={idx} message={message}/>
      )}
    </>
  );
}

export default ChatGroupDaily;
