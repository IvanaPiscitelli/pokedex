import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

function Modal({ show, closeModal, wrappedObjPokemon }) {
  if (!show) return null;

  const { name, id, sprites, types, height, weight, stats } = wrappedObjPokemon;

  return ReactDOM.createPortal(
    <div className={style.modal}>
      <div className={style.backdrop} onClick={closeModal}></div>
      <div className={style.content}>
        <div className={style["box-sprite"]}>
          <img src={sprites.front_default} alt="pokemon" className={style["img-sprite"]} />
        </div>
        <div className={style["box-body"]}>
          <div className={style["box-info-title"]}>
            <div className={style["box-title"]}>
              <h1>{name}</h1>
              <div>#{id}</div>
            </div>
          </div>
          <div className={style["box-center"]}>
            <div className={style["box-type-center"]}>
              <div className={style["body-center"]}>
                <span>Types:</span>
                <div className={style["box-type-flex"]}>
                  {types.map((type) => {
                    return (
                      <div key={type.slot} className={style["type-text"]}>
                        {type.type.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={style["body-center"]}>
                <span>Height:</span>
                <p className={style["type-text"]}> {height}cm</p>
              </div>
              <div className={style["body-center"]}>
                <span>Weight: </span>
                <p className={style["type-text"]}>{weight}kg</p>
              </div>
            </div>
          </div>
          <div className={style["box-bottom"]}>
            <div className={style["box-info-bottom"]}>
              {stats.map((stat) => {
                return (
                  <div key={stat.stat.name} className={style["body-bottom"]}>
                    <span>{stat.stat.name}:</span>
                    <p className={style["type-text"]}> {stat.base_stat}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style["btn-box-bottom"]}>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
