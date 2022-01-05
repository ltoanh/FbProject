import React from "react";

function ChatItem() {
  return (
    <div className="row__user">
      <div className="row">
        <div className="chat chat__right">
          <div className="chat__detail">
            <p>Con vit con</p>
            <p className="chat__detail--timestamp">12:35</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="chat chat__right">
          <div className="chat__detail">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur, iure culpa fuga vitae ipsa, sit laudantium
              doloremque facilis minus officiis voluptatem, quos esse tempora!
              Ipsa delectus corporis ea veniam minus!
            </p>
            <p className="chat__detail--timestamp">12:35</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
