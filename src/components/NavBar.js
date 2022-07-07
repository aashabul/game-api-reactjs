import React from "react";
import "../NavBar.css";

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
          <a href="#">Subscribe</a>
        </li>
        <li>
          <a href="#">Wishlist</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
