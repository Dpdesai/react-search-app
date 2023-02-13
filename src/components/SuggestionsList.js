import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/book-context";

function SuggestionsList() {
  const { isLoading, books } = useGlobalContext();
  console.log(books);

  if (isLoading) {
    return <div className="noresult-data">No data Found</div>;
  }

  return (
    <div className="result-data">
      {books &&
        books.map((item, id) => {
          return (
            <div key={id} className="books-list">
              <div className="book-thumbnail">
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt="book-thumbnail"
                />
              </div>
              <Link to={`/books/${item.id}`}>{item.volumeInfo.title}</Link>
              <div>By {item.volumeInfo.authors}</div>
              <div>{item.saleInfo.lastPrice}</div>
              <div>Published by {item.volumeInfo.publisher}</div>
              <div className="rating">
                <span>{item.volumeInfo.averageRating}</span>
              </div>
              {/* <QuickViewButton /> */}
            </div>
          );
        })}
    </div>
  );
}

export default SuggestionsList;
