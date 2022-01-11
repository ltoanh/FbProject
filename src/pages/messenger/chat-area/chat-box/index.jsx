import React, { useEffect, useState } from "react";
import { formatDate } from "utils/formatDate";
import ChatGroupDaily from "./ChatGroupDaily";

function ChatBox({ messenger }) {
  const [filtedDate, setFiltedDate] = useState([]);

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

  return (
    <div className="messenger__chat-area">
      {filtedDate.map((date, idx) => (
        <ChatGroupDaily key={idx} messageByDate={date} />
      ))}
    </div>
  );
}

export default ChatBox;
