import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pokelist from "./components/Main/Pokelist";
import SearchBar from "./components/SearchBar/SearchBar";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);

  const prevPageHandler = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPageHandler = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
  };

  useEffect(() => {
    setisLoading(true);
    const getPokemons = async (limit, offset) => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        setTotalPages(Math.ceil(data.count / 25));
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
    getPokemons(25, 25 * page);
  }, [page]);

  return (
    <Fragment>
      <div className={["box-container"]}>
        <Header />
        <SearchBar />
      </div>
      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onLeftClick={prevPageHandler}
        onRightClick={nextPageHandler}
      />
      <Pokelist isLoading={isLoading} pokemons={pokemons} />
      <Footer />
    </Fragment>
  );
}

export default App;
