import React from "react";
import { LeftArrow, RightArrow } from "../img/arrow";

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div>
        {page} of {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
