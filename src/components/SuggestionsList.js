import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/book-context";

function SuggestionsList() {
  // Page Focus to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calling Gloabal Context
  const { isLoading, books, search } = useGlobalContext();
  console.log(books);

  //Checking loading state
  if (isLoading) {
    return <div className="noresult-data">No data Found</div>;
  }

  return (
    <div className="result-data">
      {/* {books &&
        books.map((item, id) => {
          return (
            <div key={id} className="books-list">
              <Link to={`/books/${item.id}`} onClick={scrollToTop}>
                {item.volumeInfo.imageLinks.thumbnail && (
                  <div className="book-thumbnail">
                    <img
                      src={item.volumeInfo.imageLinks.thumbnail}
                      alt="book-thumbnail"
                    />
                  </div>
                )}
                <h3>{item.volumeInfo.title}</h3>
                <p>{item.volumeInfo.authors}</p>
                <p>Published by {item.volumeInfo.publisher}</p>
                {item.volumeInfo.averageRating && (
                  <div className="rating">
                    <span>Ratings: </span>
                    <span>{item.volumeInfo.averageRating} </span>
                    <span>({item.volumeInfo.ratingsCount})</span>
                  </div>
                )}
              </Link>
            </div>
          );
        })} */}
      {books && search !== ""
        ? books.map((item, id) => {
            return (
              <div key={id} className="books-list">
                <Link to={`/books/${item.id}`} onClick={scrollToTop}>
                  {item.volumeInfo.imageLinks && (
                    <div className="book-thumbnail">
                      <img
                        src={item.volumeInfo.imageLinks.thumbnail}
                        alt="book-thumbnail"
                      />
                    </div>
                  )}
                  <h3>{item.volumeInfo.title}</h3>
                  <p>{item.volumeInfo.authors}</p>
                  <p>Published by {item.volumeInfo.publisher}</p>
                  {item.volumeInfo.averageRating && (
                    <div className="rating">
                      <span>Ratings: </span>
                      <span>{item.volumeInfo.averageRating} </span>
                      <span>({item.volumeInfo.ratingsCount})</span>
                    </div>
                  )}
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default SuggestionsList;
