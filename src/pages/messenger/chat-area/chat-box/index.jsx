import { Avatar, AvatarGroup } from "@mui/material";
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import { formatDate } from "utils/formatDate";
import ChatGroupDaily from "./ChatGroupDaily";
import {formatRelativeDate} from 'utils/formatDate';

function ChatBox({ messenger }) {
  const user = useSelector(selectorUser);

  // filter messenger by date
  const [filtedDate, setFiltedDate] = useState([]);
  // uid of member in messenger
  const [membersInMessenger, setMembersInMessenger] = useState([]);
  // detail about messenger of user's preview
  const [membersPreviewMessage, setMembersPreviewMessage] = useState([]);

  // remove duplicate date
  const getDateList = (arr) => {
    let dateList = arr?.map((item) => formatDate(item?.timestamp.seconds));
    return [...new Set(dateList)];
  };

  //sort by time asc
  useEffect(() => {
    if (messenger) {
      messenger.message = messenger?.message?.sort(
        (a, b) => a.timestamp?.seconds - b.timestamp?.seconds
      );
    }
  }, [messenger]);

  //filter message by daily
  useEffect(() => {
    if (messenger) {
      // get date list
      let dateList = getDateList(messenger.message);
      // filter
      let filterByDate = dateList.map((date) => ({
        date: date,
        message_list: messenger?.message?.filter(
          (item) => formatDate(item?.timestamp.seconds) === date
        ),
      }));

      setFiltedDate(filterByDate);
    }
  }, [messenger]);

  // load user preview in messenger
  useEffect(() => {
    setMembersInMessenger(messenger?.member?.filter((mem) => mem !== user.uid));
  }, [messenger]);
  // load timestamp seen message with user information
  useEffect(() => {
    if (membersPreviewMessage.length === 0) {
      membersInMessenger?.map((member) => {
        db.collection("users")
          .doc(member)
          .collection("messenger")
          .doc(user.uid)
          .onSnapshot((snapMessenger) =>
            db
              .collection("users")
              .doc(snapMessenger.data().uid)
              .onSnapshot((snapUser) =>
                setMembersPreviewMessage([
                  ...membersPreviewMessage,
                  {
                    ...snapMessenger.data(),
                    ...snapUser.data(),
                  },
                ])
              )
          );
      });
    }
  }, [membersInMessenger]);

  useEffect(() => {
    console.log("users preivew", membersPreviewMessage);
  }, [membersPreviewMessage]);
  return (
    <div className="messenger__chat-area">
      {filtedDate.map((date, idx) => (
        <ChatGroupDaily key={idx} messageByDate={date} />
      ))}
      {membersPreviewMessage && (
        <AvatarGroup max={4}>
          <div className="seen-timestamp">
            {membersPreviewMessage?.map(
              (member) =>
                member.isSeen === true && (
                  <Avatar
                    sx={{ width: "13px", height: "13px" }}
                    alt={member.name}
                    src={member.profileSrc}
                  />
                )
            )}
            {
              membersPreviewMessage.length === 1 && <small className="seen-timestamp__time">{formatRelativeDate(membersPreviewMessage[0].timestamp.seconds)}</small>
            }
          </div>
        </AvatarGroup>
      )}
    </div>
  );
}

export default ChatBox;
