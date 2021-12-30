import { Avatar } from "@mui/material";
import React from "react";

function Story(props) {
  const { imageSrc, profileSrc, title } = props;

  return (
    <div className="story post__wrapper">
      <img className="story__image" src={imageSrc} alt={title} />
      <div className="story__content">
        <Avatar className="story__avatar" src={profileSrc} />
        <h4 className="story__title">{title}</h4>
      </div>
    </div>
  );
}

export default Story;
