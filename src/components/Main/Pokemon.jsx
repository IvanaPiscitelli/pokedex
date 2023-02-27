import { useContext } from "react";
import style from "./Pokemon.module.css";
import imgBallCatch from "../../img/pokeballCatch.png";
import imgBallSeen from "../../img/pokeballSeen.png";
import FavoritePokemonContext from "../store/favorite-pokemon-context";

const Pokemon = ({
  id,
  name,
  img,
  types,
  loadFavoritePokemons,
  favoritesCatched,
  favoritesSeen,
  setIsModalClicked,
}) => {
  const { catchFavoritePokemon, seenFavoritePokemon } = useContext(FavoritePokemonContext);

  const updateCatchPokemon = () => {
    catchFavoritePokemon(name);
    setTimeout(() => loadFavoritePokemons(), 50);
  };

  const updateSeenPokemon = () => {
    seenFavoritePokemon(name);
    setTimeout(() => loadFavoritePokemons(), 50);
  };

  const showModal = () => {
    setIsModalClicked(true);
  };

  const catchedPressed = favoritesCatched.includes(name) ? `${style["btn-cacth-pressed"]}` : "";
  const seenPressed = favoritesSeen.includes(name) ? `${style["btn-seen-pressed"]}` : "";

  return (
    <div className={style["pokemon-card"]} onClick={showModal}>
      <div className={style["container-img-pokemon"]}>
        <img src={img} alt="sprite pokemon" className={style["img-pokemon"]} />
      </div>
      <div className={style["card-body"]}>
        <div className={style["card-info"]}>
          <h3>{name}</h3>
          <div>#{id}</div>
        </div>
        <div className={style["card-bottom"]}>
          <div className={style.types}>
            {types.map((type) => {
              return (
                <div key={type.slot} className={style["type-text"]}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <div className={style["box-btn-pokemon-container"]}>
            <button
              className={`${style["btn-pokemon"]} ${style["btn-cacth"]} ${catchedPressed}`}
              onClick={updateCatchPokemon}
            >
              <img src={imgBallCatch} alt="pokeball catch" width="28" height="28" />
            </button>

            <button
              className={`${style["btn-pokemon"]} ${style["btn-seen"]} ${seenPressed}`}
              onClick={updateSeenPokemon}
            >
              <img src={imgBallSeen} alt="pokeball seen" width="28" height="28" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
