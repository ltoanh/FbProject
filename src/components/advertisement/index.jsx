import { Chip } from "@mui/material";
import React from "react";
import "./advertisement.css";

function Advertisement(props) {
  const { title, imageSrc } = props;

  return (
    <div className="advertisement post__wrapper">
      <h5 className="advertisement__name">
        <Chip label="QC" variant="outlined" color="success" size="small" />
        <span>{title}</span>
      </h5>
      {imageSrc && (
        <img className="advertisement__image" src={imageSrc} alt={title} />
      )}
    </div>
  );
}

export default Advertisement;
