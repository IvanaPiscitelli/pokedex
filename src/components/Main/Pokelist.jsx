import Pokemon from "./Pokemon";
import style from "./PokeList.module.css";

const Pokelist = ({ pokemons, isLoading, loadFavoritePokemons }) => {
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
              loadFavoritePokemons={loadFavoritePokemons}
            />
          );
        })
      )}
    </div>
  );
};

export default Pokelist;
