import { Avatar } from "@mui/material";
import React from "react";

function ChatReceivedItem() {
  return (
    <div className="chat__user row__user">
      <Avatar
        src="https://images.pexels.com/photos/8265707/pexels-photo-8265707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        sx={{ width: "35px", height: "35px" }}
      />
      <div className="chat__user__content">
        <h5 className="chat__user__header">Le Tu Oanh</h5>
        <div className="row">
          <div className="chat chat__left">
            <div className="chat__detail">
              <p>Oke</p>
              <p className="chat__detail--timestamp">12:35</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="chat chat__left">
            <div className="chat__detail">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                consectetur quas est amet natus modi voluptatem blanditiis fugit
                ipsam, asperiores autem sit omnis unde sapiente dolorem fuga non
                sequi temporibus?
              </p>
              <p className="chat__detail--timestamp">12:35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatReceivedItem;
