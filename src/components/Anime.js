import React from "react";
import { Link } from "react-router-dom";
import "./Anime.css"

const setVoteClass = (vote) => {
  if (vote >= 80) return "gold";
  if (vote >= 75) return "green";
  if (vote >= 60) return "orange";
  if (vote >= 50) return "red";
  if (vote < 50) return "common";
};

const Anime = ({
  averageRating,
  canonicalTitle,
  posterImage,
  synopsis,
  id,
}) => (
  <div className="anime">
    <img
      className="anime-poster"
      src={
        posterImage.large
          ? posterImage.large
          : "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      }
      alt={canonicalTitle}
    />
    <div className="anime-info">
      <h3 className="anime-info-title">{canonicalTitle}</h3>
      <span className={`tag ${setVoteClass(averageRating)}`}>
        {averageRating}
      </span>
      <Link to={`/anime/${id}`}>
        <button className="infoButton">info</button>
      </Link>
    </div>


    {/* <div className="anime-desc">
      <h2>Description:</h2>
      <p>{synopsis}</p>
    </div> */}
  </div>
);

export default Anime;
