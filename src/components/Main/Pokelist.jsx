import Pokemon from "./Pokemon";
import style from "./PokeList.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Loader from "../Loader/Loader";

const Pokelist = ({
  pokemons,
  isLoading,
  loadFavoritePokemons,
  favoritesCatched,
  favoritesSeen,
  setIsModalClicked,
  isModalClicked,
}) => {
  const [wrappedObjPokemon, setWrappedObjPokemon] = useState();

  const saveWrappedObjPokemon = (pokemon) => {
    setWrappedObjPokemon(pokemon);
  };

  return (
    <>
      {isModalClicked && (
        <Modal
          show={isModalClicked}
          closeModal={() => setIsModalClicked(false)}
          wrappedObjPokemon={wrappedObjPokemon}
        />
      )}
      <div className={style["pokelist-grid"]}>
        {isLoading ? (
          <Loader />
        ) : (
          pokemons.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                loadFavoritePokemons={loadFavoritePokemons}
                favoritesCatched={favoritesCatched}
                favoritesSeen={favoritesSeen}
                setIsModalClicked={setIsModalClicked}
                isModalClicked={isModalClicked}
                saveWrappedObjPokemon={saveWrappedObjPokemon}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Pokelist;
