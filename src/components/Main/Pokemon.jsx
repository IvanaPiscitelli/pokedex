import React from "react";
import style from "./Pokemon.module.css";

const Pokemon = () => {
  return (
    <div className={style["pokemon-card"]}>
      <div className={style["container-img-pokemon"]}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="sprite pokemon"
          className={style["img-pokemon"]}
        />
      </div>
      <div className={style["card-body"]}>
        <div className={style["card-info"]}>
          <h3>Name</h3>
          <div>#01</div>
        </div>
        <div className={style["card-bottom"]}>
          <div>type</div>
          <button className={style["btn-pokemon"]}>Seen</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
