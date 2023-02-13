import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/book-context";

function Book() {
  const { isLoading, books, showBook } = useGlobalContext();

  const { id } = useParams();
  //   console.log(id);
  //   console.log(showBook);
  const bookItem = books.find((obj) => obj.id === id);
  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      {books && (
        <section className="books-detail">
          <div className="book-img">
            <img src={bookItem.volumeInfo.imageLinks.thumbnail} />
          </div>
          <div className="book-info">
            <h3>{bookItem.volumeInfo.title}</h3>
            <h4>Author: {bookItem.volumeInfo.authors}</h4>
            <h5>Publisher: {bookItem.volumeInfo.publisher}</h5>
            <h5>published Date: {bookItem.volumeInfo.publishedDate}</h5>
            {/* <div>
              <span>{bookItem.saleInfo.listPrice.currencyCode}</span>
              {bookItem.saleInfo.listPrice.amount}
            </div> */}
            <div>{bookItem.volumeInfo.description}</div>
            <div className="page-count">
              Total Pages: <span>{bookItem.volumeInfo.pageCount}</span>
            </div>
            <div className="rating">
              <h5>Ratings</h5>
              <span>{bookItem.volumeInfo.averageRating} </span>
              <span>({bookItem.volumeInfo.ratingsCount})</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Book;
