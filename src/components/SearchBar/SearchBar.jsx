import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onSearchButton }) => {
  return (
    <nav className={style["searchbar-container"]}>
      <div className={style.searchbar}>
        <input type="text" placeholder="Find Pokémon" onChange={onSearch} />
      </div>
      <div className={style["searchbar-btn"]}>
        <button onClick={onSearchButton}>Find</button>
      </div>
    </nav>
  );
};

export default SearchBar;
