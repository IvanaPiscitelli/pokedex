import React from "react";

// Per caricamenti rapidi, usare le props (no Context)
// Per caricamenti non rapidi, il Context potrebbe essere utile
const FavoritePokemonContext = React.createContext({
  catchFavoritePokemons: [],
  seenFavoritePokemons: [],
  catchFavoritePokemon: (name) => {},
  seenFavoritePokemon: (name) => {},
});

export default FavoritePokemonContext;
