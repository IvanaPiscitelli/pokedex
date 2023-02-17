import React from "react";
import style from "./Header.module.css";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo pokedex" className={style["logo-header"]} />
      <h1 className={style["title-logo"]}>Pokedex</h1>
    </header>
  );
};

export default Header;
