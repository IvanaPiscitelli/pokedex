import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <nav className={style["searchbar-container"]}>
      <div className={style.searchbar}>
        <input type="text" placeholder="Cerca Pokémon" />
      </div>
      <div className={style["searchbar-btn"]}>
        <button>Cerca</button>
      </div>
    </nav>
  );
};

export default SearchBar;
