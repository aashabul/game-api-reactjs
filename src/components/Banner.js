import React from "react";
import "../Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <video autoPlay loop muted width="100%" height="100%">
        <source
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
          type="video/mp4"
        />
      </video>
      <div className="banner-text">Game World</div>
    </div>
  );
};

export default Banner;
