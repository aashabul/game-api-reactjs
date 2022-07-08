import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://still-retreat-02372.herokuapp.com/")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <a href={item.game_url} target="_blank">
            <LazyLoadImage
              effect="blur"
              src={item.thumbnail}
              className="card-image"
              height="100%"
              width="100%"
              alt={item.title}
            />
          </a>
          <div className="card-info">
            <h4>{item.title}</h4>
            <div className="card-tags">
              <span className="genre">{item.genre}</span>
              <span className="platform">{item.platform}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
