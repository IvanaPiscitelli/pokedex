import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

function Modal({ show, closeModal }) {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className={style.modal}>
      <div className={style.backdrop} onClick={closeModal}></div>
      <div className={style.content}>
        <h2>Simple Modal</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
