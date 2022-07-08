import React from "react";
import video from "../assets/background-video.mp4";

const Banner = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted width="100%" height="100%" />
    </div>
  );
};

export default Banner;
