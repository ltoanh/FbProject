import {
  Avatar,
  Badge,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h3 className="contact__title">Người liên hệ</h3>
      <Box>
        <List aria-label="contact">
          <ListItemButton>
            <ListItemAvatar>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/users/avatars/75708967/vika-kirillova-290.jpeg?auto=compress&fit=crop&h=256&w=256" />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText primary="Vika Kirillova" />
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/9967679/pexels-photo-9967679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260https://images.pexels.com/photos/9967679/pexels-photo-9967679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText primary="Никита Семехин" />
          </ListItemButton>      
        </List>
      </Box>
    </div>
  );
}

export default Contact;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
