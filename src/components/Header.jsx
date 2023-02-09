import React from "react";
import style from "./Header.module.css";
import pokeballCatch from "../img/pokeballCatch.png";
import pokeballSeen from "../img/pokeballSeen.png";
import pokemonTrainer from "../img/pokemonTrainer.png";
import ShowYourPokemon from "./ShowYourPokemon";
import FilterPokedex from "./FilterPokedex";

const Header = () => {
  return (
    <header>
      <h1>Pokédex</h1>
      <ShowYourPokemon img={pokeballCatch} style={style.catched} text={340} imgAlt="pokeball" />
      <ShowYourPokemon img={pokeballSeen} style={style.seen} text={600} imgAlt="pokeball" />

      <FilterPokedex />
      <ShowYourPokemon img={pokemonTrainer} style={style.profile} text="Profile" imgAlt="profile trainer" />
    </header>
  );
};

export default Header;
