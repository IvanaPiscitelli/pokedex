import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pokelist from "./components/Main/Pokelist";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <Fragment>
      <div className={["box-container"]}>
        <Header />
        <SearchBar />
      </div>

      <Pokelist />
      <Footer />
    </Fragment>
  );
}

export default App;
