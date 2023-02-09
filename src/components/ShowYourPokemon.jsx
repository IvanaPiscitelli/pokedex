import React from "react";

const ShowYourPokemon = ({ img, style, text, imgAlt }) => {
  return (
    <div className={style}>
      <img src={img} alt={imgAlt} />
      <p>{text}</p>
    </div>
  );
};

export default ShowYourPokemon;
