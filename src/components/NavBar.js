import React from "react";
import "../NavBar.css";
import { Link } from "react-scroll";

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
          <Link
            to="collection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Collection
          </Link>
        </li>
        <li>
          <Link
            to="poster"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Poster
          </Link>
        </li>
        <li>
          <Link
            to="search"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
