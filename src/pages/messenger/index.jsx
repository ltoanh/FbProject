import {
  Avatar,
  Badge,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import "./messenger.css";
import { Search } from "@mui/icons-material";

function Messenger() {
  const user = useSelector(selectorUser);
  const [messengerInputValue, setMessengerInputValue] = useState("");

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
    <div className="app__content messenger">
      {/* left sidebar */}
      <div className="sidebar">
        <div className="sidebar__wrapper contact post__wrapper messenger__sidebar">
          <div className="sidebar__header">
            <div className="row">
              <h2 className="sidebar__header--title">Chat</h2>
              <Badge badgeContent={4} color="error">
                <Avatar
                  src={user.profileSrc}
                  sx={{ width: "30px", height: "30px" }}
                  alt={user.name}
                />
              </Badge>
            </div>
            <div className="search">
              <Search />
              <input type="text" placeholder="Tìm kiếm người dùng" />
            </div>
            <Divider sx={{ my: 1 }} />
          </div>
          {connectedUsers.map((item) => (
            <ListItemButton key={item.uid}>
              <ListItemAvatar>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt={item.name} src={item.profileSrc} />
                  <div
                    className={
                      item.online
                        ? `active-user badge-active`
                        : `inactive-user badge-active`
                    }
                  ></div>
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <div className="sidebar__message__preview">
                    {item.isYourLatestMessenger && (
                      <h5 className="sidebar__message__sender">Bạn: </h5>
                    )}

                    {item.isYourLatestMessenger && item.isSeen && (
                      <>
                        <p className="sidebar__message__preview__text">
                          {item.latestMessage}
                        </p>
                        <Avatar
                          alt={item.name}
                          src={item.profileSrc}
                          sx={{ width: ".75rem", height: ".75rem" }}
                        />
                      </>
                    )}
                    {!item.isYourLatestMessenger && !item.isSeen && (
                      <Badge color="info" badgeContent="" variant="dot">
                        <p className="sidebar__message__preview__text">
                          {item.latestMessage}
                        </p>
                      </Badge>
                    )}
                  </div>
                }
              />
            </ListItemButton>
          ))}
        </div>
      </div>
      {/* content */}
      <div className="messenger__detail post__wrapper">
        {/* header */}
        <div className="messenger__detail__header">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              src="https://images.pexels.com/photos/8265707/pexels-photo-8265707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              sx={{ width: 56, height: 56 }}
            />
            <div
              className={
                1 === 1
                  ? `active-user badge-active`
                  : `inactive-user badge-active`
              }
            ></div>
          </Badge>
          <h3 className="messenger__detail__header__info">Tu Oanh Le</h3>
        </div>
        {/* box */}
        <Divider sx={{ my: 1 }} />
        <div className="messenger__chat-area">
          <Divider style={{fontSize: ".75rem"}}>03-01-2021</Divider>
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
                    doloremque facilis minus officiis voluptatem, quos esse
                    tempora! Ipsa delectus corporis ea veniam minus!
                  </p>
                  <p className="chat__detail--timestamp">12:35</p>
                </div>
              </div>
            </div>
          </div>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed consectetur quas est amet natus modi voluptatem
                      blanditiis fugit ipsam, asperiores autem sit omnis unde
                      sapiente dolorem fuga non sequi temporibus?
                    </p>
                    <p className="chat__detail--timestamp">12:35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider sx={{ my: 1 }} />
        {/* input sender */}
        <div className="messenger__sender">
          <TextareaAutosize
            minRows={1}
            placeholder="Aa"
            maxRows={4}
            style={{
              width: "100%",
              border: "1px solid #ebebeb",
              padding: ".5rem 1.25rem",
              borderRadius: "25px",
              backgroundColor: "#eff2f5",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
