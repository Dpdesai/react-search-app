import React from "react";
import { useGlobalContext } from "../context/book-context";

function SearchBar() {
  const { search, handleSearch } = useGlobalContext();

  return (
    <form onSubmit={(event) => event.preventDefault()} className="search-wrap">
      <input
        type="text"
        name="search"
        onChange={(event) => handleSearch(event.target.value)}
        value={search}
        placeholder="Search book here..."
        className="search"
      />
      <input type="submit" value="submit" className="submit-btn" />
    </form>
  );
}

export default SearchBar;
