import React from "react";
import { formatRelativeDate } from "utils/formatDate";

function ChatItem({message}) {
  return (
    <div className="row__user">
      <div className="row">
        <div className="chat chat__right">
          <div className="chat__detail">
            <p>{message.content}</p>
            <p className="chat__detail--timestamp">{formatRelativeDate(message.timestamp.seconds)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
