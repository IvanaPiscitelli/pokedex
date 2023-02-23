import React from "react";
import style from "./ShowCountPokemons.module.css";
import imgBallCatch from "../../img/pokeballCatch.png";
import imgBallSeen from "../../img/pokeballSeen.png";

const ShowCountPokemons = () => {
  return (
    <div className={style["img-container"]}>
      <div className={style["img-catch"]}>
        <img src={imgBallCatch} alt="pokeball catch" width="28" height="28" />
        <span className={style.count}>1</span>
      </div>
      <div className={style["img-seen"]}>
        <img src={imgBallSeen} alt="pokeball seen" width="28" height="28" />
        <span className={style.count}>1</span>
      </div>
    </div>
  );
};

export default ShowCountPokemons;
