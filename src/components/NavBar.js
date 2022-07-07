import React from "react";
import "../NavBar.css";

const NavBar = () => {
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
