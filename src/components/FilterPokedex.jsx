import React from "react";
import style from "./FilterPokedex.module.css";

const FilterPokedex = () => {
  return (
    <div className={style.sorting}>
      <span className={style.buttonFilter}>A - Z</span>
    </div>
  );
};

export default FilterPokedex;
