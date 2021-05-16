import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css"
const Pagination = ({ page, search, totalCount }) => {
  return (
    <div className="pagination">
      <div className="nav">
        {+page > 1 ? (
          <Link to={`/page/${+page - 1}/${search || ""}`}>
            <span>&#9664;</span>
          </Link>
        ) : (
          <span>&nbsp;&nbsp;</span>
        )}

        {page}
        {+page > 0 && +totalCount > 20 ? (
          <Link to={`/page/${+page + 1}/${search || ""}`}>
            <span>&#9654;</span>
          </Link>
        ) : (
          <span>&nbsp;&nbsp;</span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
