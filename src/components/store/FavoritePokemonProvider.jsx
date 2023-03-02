import { useReducer } from "react";
import FavoritePokemonContext from "./favorite-pokemon-context";

const favoritePokemonDefaultState = {
  catchFavoritePokemons: window.localStorage.getItem("catchFavoritePokemons")
    ? window.localStorage
        .getItem("catchFavoritePokemons")
        .split(",")
        .filter((element) => element)
    : [],
  seenFavoritePokemons: window.localStorage.getItem("seenFavoritePokemons")
    ? window.localStorage
        .getItem("seenFavoritePokemons")
        .split(",")
        .filter((element) => element)
    : [],
};

const favoritePokemonReducer = (state, action) => {
  if (action.type === "CATCH") {
    let lastState;
    const isFavorite = state.catchFavoritePokemons.indexOf(action.name);
    if (isFavorite >= 0) {
      //Case where favorite pokemon is already in array.
      lastState = state.catchFavoritePokemons.filter((pokemon) => pokemon !== action.name);
    } else {
      //Case where favorite pokemon is not in array
      lastState = state.catchFavoritePokemons.concat(action.name);
    }

    window.localStorage.setItem("catchFavoritePokemons", lastState);

    return { catchFavoritePokemons: lastState, seenFavoritePokemons: state.seenFavoritePokemons };
  }

  if (action.type === "SEEN") {
    let lastState;
    const isFavorite = state.seenFavoritePokemons.indexOf(action.name);
    if (isFavorite >= 0) {
      //Case where favorite pokemon is already in array.
      lastState = state.seenFavoritePokemons.filter((pokemon) => pokemon !== action.name);
    } else {
      //Case where favorite pokemon is not in array
      lastState = state.seenFavoritePokemons.concat(action.name);
    }

    window.localStorage.setItem("seenFavoritePokemons", lastState);

    return { catchFavoritePokemons: state.catchFavoritePokemons, seenFavoritePokemons: lastState };
  }

  return favoritePokemonDefaultState;
};

const FavoritePokemonProvider = (props) => {
  const [favoritePokemon, dispatchFavoritePokemon] = useReducer(favoritePokemonReducer, favoritePokemonDefaultState);

  const catchFavoritePokemon = (name) => {
    dispatchFavoritePokemon({ type: "CATCH", name: name });
  };

  const seenFavoritePokemon = (name) => {
    dispatchFavoritePokemon({ type: "SEEN", name: name });
  };

  const favoritePokemonContext = {
    catchFavoritePokemons: favoritePokemon.catchFavoritePokemons,
    seenFavoritePokemons: favoritePokemon.seenFavoritePokemons,
    catchFavoritePokemon: catchFavoritePokemon,
    seenFavoritePokemon: seenFavoritePokemon,
  };

  return (
    <FavoritePokemonContext.Provider value={favoritePokemonContext}>{props.children}</FavoritePokemonContext.Provider>
  );
};

export default FavoritePokemonProvider;
