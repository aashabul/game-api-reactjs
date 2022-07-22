import React from "react";
import "../NavBar.css";
import { Link as HashLink } from "react-scroll";
import { Link } from "react-router-dom";

const NavBar = () => {
  const body = document.body;
  let lastScroll = 0;

  if (document.body.clientWidth > 450) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }

      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }

      if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }

      lastScroll = currentScroll;
    });
  }

  const menuSlide = () => {
    const burger = document.querySelector("#burger-menu");
    const nav = document.querySelector(".nav-links");
    const banner = document.querySelector(".banner");
    const links = document.querySelectorAll("nav-links li");

    burger.addEventListener("click", () => {
      nav.classList.toggle("burger-menu-active");
    });

    banner.addEventListener("click", () => {
      nav.classList.remove("burger-menu-active");
    });
  };

  return (
    <div className="nav-container">
      <h1 id="nav-logo">Game World</h1>
      <div id="burger-menu" onClick={menuSlide}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className="nav-links">
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
