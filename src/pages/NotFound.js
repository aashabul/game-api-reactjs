import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <FontAwesomeIcon icon={faFaceFrown} color="white" size="8x" />
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The server could not find the requested page.</p>
    </div>
  );
};

export default NotFound;
