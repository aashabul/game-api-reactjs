import React from "react";
import { Link } from "react-router-dom";
import { Link as HashLink } from "react-scroll";
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
      <div className="banner-text">
        <div>
          <blockquote>
            <span id="quote">
              Game Brings People <br />
              Together
            </span>
            <span> - Aashabul</span>
          </blockquote>
        </div>
        <div id="banner-btn">
          <HashLink
            to="search"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button>Play Games</button>
          </HashLink>

          <Link to="community">
            <button>Chat Online</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
