import React from "react";
import ReactPlayer from 'react-player/youtube'

import videos from "../Assets/video.mp4";

const Details = (props) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  };

  const imageStyle = {
    width: "50%", // updated width
    maxHeight: "500px",
    objectFit: "contain",
    marginBottom: "2rem",
    marginTop: "1rem", // added margin top
  };

  const titleStyle = {
    fontSize: "2.5em", // updated font size
    fontWeight: "bold",
    margin: "0",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#333",
  };

  const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "1rem 0",
    fontSize: "1.2em",
    color: "#666",
  };


  return (
    <div style={boxStyle}>
      <video width="850" height="700" controls>
        <source src={videos} type="video/mp4"></source>
      </video>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={props.image} style={imageStyle} alt="Movie Poster" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={titleStyle}>
            <span>{props.title}</span>
          </h2>
          <div style={detailsStyle}>
            <span>
              <strong>Category:</strong> {props.category}
            </span>
            <span>
              <strong>Director:</strong> {props.director}
            </span>
            <span>
              <strong>Rating:</strong> {props.rating}
            </span>
            <span>
              <strong>Release Date:</strong> {props.releaseDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details
