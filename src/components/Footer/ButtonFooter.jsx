import React from "react";
import style from "./ButtonFooter.module.css";
const ButtonFooter = () => {
  return (
    <div className={style["footer-btn"]}>
      <button className={style["btn-circle"]}>A</button>
      <label>See Details</label>
    </div>
  );
};

export default ButtonFooter;
