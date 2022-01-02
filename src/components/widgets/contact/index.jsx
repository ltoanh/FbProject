import {
  Avatar,
  Badge,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import "./contact.css";
import { Person } from "@mui/icons-material";

function Contact() {
  const user = useSelector(selectorUser);

  const [credentialUsers, setCredentialUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [offlineUsers, setOfflineUsers] = useState([]);

  // load active user
  useEffect(() => {
    let unsubscribe = db.collection("users").onSnapshot((snapshot) => {
      let actives = snapshot.docs.map((doc) => doc.data());
      setCredentialUsers(actives.filter((active) => active.uid !== user.uid));
    });

    return () => unsubscribe(); // stop listening to change
  }, [user.uid]);

  // filter online user
  useEffect(() => {
    setOnlineUsers(credentialUsers.filter((user) => user.online));
  }, [credentialUsers]);
  // filter offline user
  useEffect(() => {
    setOfflineUsers(credentialUsers.filter((user) => !user.online));
  }, [credentialUsers]);

  const renderListUsers = (arrayUsers) =>
    arrayUsers.map((item) => (
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
                  ? `active-user badget-active`
                  : `inactive-user badget-active`
              }
            ></div>
          </Badge>
        </ListItemAvatar>
        <ListItemText primary={item.name} />
      </ListItemButton>
    ));

  return (
    <div className="contact">
      <div className="contact__header">
        <h3 className="contact__title">Người liên hệ</h3>
        <div className="contact__title__detail">
          <div className="contact__title__item">
            <Person style={{ color: "#41B35D" }} />{" "}
            <span>{onlineUsers.length}</span>
          </div>
          <div className="contact__title__item">
            <Person style={{ color: "red" }} />{" "}
            <span>{offlineUsers.length}</span>
          </div>
        </div>
      </div>
      <Box>
        <List aria-label="contact">
          {renderListUsers(onlineUsers)}
          {renderListUsers(offlineUsers)}
        </List>
      </Box>
    </div>
  );
}

export default Contact;
