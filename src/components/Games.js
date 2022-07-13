import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../Games.css";
import ReactPaginate from "react-paginate";

const Games = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("https://still-retreat-02372.herokuapp.com/")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredItem = data.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const filteredItemLength = filteredItem.length;
  // console.log(filteredItemLength);

  const gamePerPage = 8;
  const pagesVisited = pageNumber * gamePerPage;

  const pageCount = Math.ceil(
    searchItem !== ""
      ? filteredItemLength / gamePerPage
      : data.length / gamePerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <div id="search">
        <input
          type="text"
          placeholder="Search by Title"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </button>
      </div>
      {searchItem !== "" && (
        <div className="search-count">
          <span>Items Found: </span>
          <span id="number">{filteredItemLength}</span>
        </div>
      )}
      <div className="card-container" id="collection">
        {data
          .filter((item) => {
            if (searchItem === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return item;
            }
          })
          .slice(pagesVisited, pagesVisited + gamePerPage)
          .map((item, index) => (
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Games;
