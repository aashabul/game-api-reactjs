import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <a href={item.game_url} target="_blank">
            <LazyLoadImage src={item.thumbnail} className="card-image" />
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
