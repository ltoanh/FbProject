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

function Contact() {
  const user = useSelector(selectorUser);

  const [activeUsers, setActiveUsers] = useState([]);

  // load active user
  useEffect(() => {
    let unsubscribe = db.collection("users").onSnapshot((snapshot) => {
      let actives = snapshot.docs.map((doc) => doc.data());
      setActiveUsers(actives.filter((active) => active.uid !== user.uid));
    });

    return () => unsubscribe(); // stop listening to change
  }, [user.uid]);

  return (
    <div className="contact">
      <h3 className="contact__title">{activeUsers.length} người liên hệ</h3>
      <Box>
        <List aria-label="contact">
          {activeUsers.map((activeUser) => (
            <ListItemButton key={activeUser.uid}>
              <ListItemAvatar>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt={activeUser.name} src={activeUser.profileSrc} />
                  <div className={activeUser.online ? `active-user badget-active` : `inactive-user badget-active`}></div>
                </Badge>
              </ListItemAvatar>
              <ListItemText primary={activeUser.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default Contact;