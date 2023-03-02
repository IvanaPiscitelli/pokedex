import { LeftArrow, RightArrow } from "../../img/arrow";
import style from "./Pagination.module.css";

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  return (
    <div className={style.pagination}>
      <button className={style["pagination-btn"]} onClick={onLeftClick}>
        <div className={style.icon}>
          <LeftArrow />
        </div>
      </button>
      <div>
        {page} of {totalPages}
      </div>
      <button className={style["pagination-btn"]} onClick={onRightClick}>
        <div className={style.icon}>
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
