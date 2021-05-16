import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = ({ handleSubmit, handleChange, searchTerm }) => {
  return (
    <header>
      <Link to={`/`}>
        <img
          width="50px"
          src="https://img-premium.flaticon.com/png/512/3541/3541180.png?token=exp=1621139271~hmac=deb53c14de3a1923f897aaf7925736e6"
          alt="home"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
    </header>
  );
};

export default Header;
