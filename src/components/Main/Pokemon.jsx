import React from "react";
import style from "./Pokemon.module.css";

const Pokemon = ({ id, name, img, types }) => {
  return (
    <div className={style["pokemon-card"]}>
      <div className={style["container-img-pokemon"]}>
        <img src={img} alt="sprite pokemon" className={style["img-pokemon"]} />
      </div>
      <div className={style["card-body"]}>
        <div className={style["card-info"]}>
          <h3>{name}</h3>
          <div>#{id}</div>
        </div>
        <div className={style["card-bottom"]}>
          <div className={style.types}>
            {types.map((type) => {
              return (
                <div key={type.slot} className={style["type-text"]}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className={style["btn-pokemon"]}>Seen</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
