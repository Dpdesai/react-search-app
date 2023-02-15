import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SuggestionsList from "./SuggestionsList";

function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-block">
        <Header />
        <SearchBar />
      </div>
      <SuggestionsList />
    </div>
  );
}

export default SearchPage;
