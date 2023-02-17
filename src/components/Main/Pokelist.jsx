import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import style from "./PokeList.module.css";
import axios from "axios";

const Pokelist = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const getPokemons = async (limit) => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const promises = data.results.map(async (pokemon) => {
          const { data } = await axios.get(pokemon.url);
          return data;
        });
        const results = await Promise.all(promises);
        setPokemons(results);
        setisLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPokemons(200);
  }, []);

  return (
    <div className={style["pokelist-grid"]}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        pokemons.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              img={pokemon.sprites.front_default}
              types={pokemon.types}
            />
          );
        })
      )}
    </div>
  );
};

export default Pokelist;
