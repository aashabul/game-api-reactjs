import React from "react";
import "../NavBar.css";
import { Link as HashLink } from "react-scroll";
import { Link } from "react-router-dom";

const NavBar = () => {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  });
  return (
    <div className="nav-container">
      <ul>
        <li>
          <HashLink
            to="poster"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Poster
          </HashLink>
        </li>
        <li>
          <HashLink
            to="search"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Games
          </HashLink>
        </li>

        <li>
          <Link to="community" className="link">
            Community
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
