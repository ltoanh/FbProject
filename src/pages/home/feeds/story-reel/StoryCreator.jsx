import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {useSelector} from 'react-redux';
import { selectorUser } from "slice/userSlice";

function StoryCreator() {
  const user = useSelector(selectorUser);

  return (
    <div className="story-creator story post__wrapper">
      <img className="story-creator__image" src={user.profileSrc} alt={user?.name} />
      <div className="story-creator__add">
        <AddCircleIcon color="primary" />
      </div>
      <p className="story-creator__option">Tạo tin</p>
    </div>
  );
}

export default StoryCreator;
