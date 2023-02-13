import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

function Modal({ bookItem, show, onClose }) {
  if (!show) {
    return null;
  }

  let thumbnail =
    bookItem.volumeInfo.imageLinks &&
    bookItem.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div>
      <div className={classes.modal}>
        <div className="modal-inner">
          <button className="close" onClick={onClose}>
            <i class="fa fa-times"></i>
          </button>
          <div className="modal-inner-div">
            <img src={thumbnail} alt="" />
          </div>
          <h1>{bookItem.volumeInfo.title}</h1>
          <h3>{bookItem.volumeInfo.authors}</h3>
          <h4>
            {bookItem.volumeInfo.publisher}
            <span>{bookItem.volumeInfo.publishedDate}</span>
          </h4>
          <br />
          <a href={bookItem.volumeInfo.previewLink}>
            <button>More</button>
          </a>
          <h4 className="description">{bookItem.volumeInfo.description}</h4>
        </div>
      </div>
    </div>
  );
}

export default Modal;
