import React from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/UI/Carousel";
import { useGlobalContext } from "../context/book-context";

function Book() {
  //Calling Global contetx
  const { isLoading, books, showBook } = useGlobalContext();

  //Checking Book id and showing matching book data
  const { id } = useParams();
  const bookItem = books.find((obj) => obj.id === id);
  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <div className="top-section">
        {books && (
          <div className="main-wrap">
            <Link to="/books" className="back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
              Back to List
            </Link>
            <section className="books-detail">
              <div className="book-img">
                <img
                  src={bookItem.volumeInfo.imageLinks.thumbnail}
                  alt="thumbnail"
                />
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
                {bookItem.volumeInfo.averageRating && (
                  <div className="rating">
                    <h5>Ratings</h5>
                    <span>{bookItem.volumeInfo.averageRating} </span>
                    <span>({bookItem.volumeInfo.ratingsCount})</span>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
      <div className="slider-section">
        <h3>Related All Books </h3>
        <Carousel />
      </div>
    </>
  );
}

export default Book;
