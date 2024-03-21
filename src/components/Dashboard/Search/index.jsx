/* eslint-disable react/prop-types */

import styles from "./styles.module.css";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Search({ search, onSearchChange }) {
  return (
    <div className={styles.searchbar}>
      <SearchRoundedIcon />
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearchChange}
        aria-describedby="searchlabel"
      />
      <label
        id="searchlabel"
        className={`${search && styles.labeltranslate}`}
        htmlFor="search"
      >
        Enter a keyword...
      </label>
    </div>
  );
}

export default Search;
