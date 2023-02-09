import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SuggestionsList from "./SuggestionsList";

function SearchPage() {
  const apiKey = "AIzaSyC-xx-W3FEDlTN80i3CORz3bjLymoCD3Ec";

  //State to hold book data
  const [book, setBook] = useState([]);

  //Function to getBook
  const getBook = async (search) => {
    // make fetch request and store response
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?apikey=${apiKey}&q=${search}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Books state to the book
    setBook(data.items);
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="search-page">
      <Header />
      <SearchBar booksearch={getBook} />
      <SuggestionsList book={book} />
    </div>
  );
}

export default SearchPage;
