import React from "react";
import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={style["center-on-page"]}>
      <div className={style.pokeball}>
        <div className={style["pokeball__button"]}></div>
      </div>
    </div>
  );
};

export default Loader;
