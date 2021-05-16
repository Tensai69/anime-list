import React from 'react';
import {Link} from "react-router-dom";
import "./ButtonMainPage.css"
const ButtonMainPage = () => {
  return (
    <>
      <Link to={`/`}>
        <button className="homeButton">main page</button>
      </Link>
    </>
  );
};

export default ButtonMainPage;
