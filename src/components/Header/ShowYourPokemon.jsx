import React from "react";
import style from "./ShowYourPokemon.module.css";

const ShowYourPokemon = ({ img, text, imgAlt }) => {
  return (
    <div className={style.headerInfo}>
      <img src={img} alt={imgAlt} />
      <p>{text}</p>
    </div>
  );
};

export default ShowYourPokemon;
