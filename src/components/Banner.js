import React from "react";
import video from "../assets/bg.mp4";

const Banner = () => {
  return (
    <div style={{ width: "100%" }}>
      <video autoPlay loop muted width="100%" height="100%">
        <source src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" />
      </video>
    </div>
  );
};

export default Banner;
