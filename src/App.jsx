import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pokelist from "./components/Main/Pokelist";
import SearchBar from "./components/SearchBar/SearchBar";
import Pagination from "./components/Pagination";
import style from "./App.module.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  // const [isSearching, setIsSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const getPokemons = async (limit, offset) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      setTotalPages(Math.ceil(data.count / 25));
      const promises = data.results.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        return data;
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setIsLoading(false);
      setNotFound(false);
    } catch (error) {
      setNotFound(true);
      setIsLoading(false);

      console.log(error.message);
    }
  };

  const prevPageHandler = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPageHandler = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
  };

  const searchChangeHandler = async (event) => {
    setSearch(event.target.value);

    if (event.target.value.length === 0) {
      getPokemons(25, 25 * page);
    }
  };

  const searchClickHandler = async () => {
    if (search.length === 0) return;

    // setIsSearching(true);
    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!data) {
        setSearch("");
        // setIsSearching(false);
        setIsLoading(false);
        setNotFound(true);
        return;
      } else {
        setSearch("");
        // setIsSearching(false);
        setIsLoading(false);
        setPokemons([data]);
        setPage(0);
        setTotalPages(1);
        setNotFound(false);
      }
    } catch (error) {
      setIsLoading(false);
      setNotFound(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPokemons(25, 25 * page);
  }, [page]);

  return (
    <Fragment>
      <div className={style["box-container"]}>
        <Header />
        <SearchBar onSearch={searchChangeHandler} onSearchButton={searchClickHandler} />
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={prevPageHandler}
          onRightClick={nextPageHandler}
        />
        {notFound ? (
          <div className={style["not-found-text"]}>Pokémon not Found 📛 </div>
        ) : (
          <Pokelist isLoading={isLoading} pokemons={pokemons} />
        )}
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;
