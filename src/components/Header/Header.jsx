import React from "react";
import style from "./Header.module.css";
import pokeballCatch from "../../img/pokeballCatch.png";
import pokeballSeen from "../../img/pokeballSeen.png";
import ShowYourPokemon from "./ShowYourPokemon";
import FilterPokedex from "../FilterPokedex";

const Header = () => {
  return (
    <header>
      <div className={style.headerPics}>
        <h1>Pokédex</h1>
        <div className={style.caughtSeen}>
          <ShowYourPokemon img={pokeballCatch} text={340} imgAlt="pokeball" />
          <ShowYourPokemon img={pokeballSeen} text={600} imgAlt="pokeball" />
          {/* <ShowYourPokemon img={pokemonTrainer} text="Profile" imgAlt="profile trainer" /> */}
        </div>
      </div>
      <FilterPokedex />
    </header>
  );
};

export default Header;
