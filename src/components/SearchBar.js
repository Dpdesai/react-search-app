import React from "react";

function SearchBar() {
  return (
    <div className="search-wrap">
      <input type="text" placeholder="searchbar" className="search" />
      <button>search</button>
    </div>
  );
}

export default SearchBar;
