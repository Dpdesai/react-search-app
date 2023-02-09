import React from "react";
import { useParams } from "react-router-dom";

function Book({ book }) {
  const { id } = useParams();
  console.log(id);
  const bookItem = book.filter((obj) => obj.id == id);
  return (
    <section className="books-detail">
      <div className="book-img">
        <img src={bookItem.volumeInfo.imageLinks.thumbnail} />
      </div>
      <h3>{bookItem.volumeInfo.title}</h3>
      <div>{bookItem.volumeInfo.authors}</div>
      <div>{bookItem.saleInfo.price}</div>
      <div>{bookItem.volumeInfo.publisher}</div>
      <div>{bookItem.volumeInfo.description}</div>
      <div className="rating">
        <span>{bookItem.volumeInfo.averageRating}</span>
      </div>
    </section>
  );
}

export default Book;
