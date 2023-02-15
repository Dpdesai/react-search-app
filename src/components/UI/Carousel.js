import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useGlobalContext } from "../../context/book-context";
import "./Carousel.css";

function Carousel() {
  //Slider Setting
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  // Page Focus to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calling Gloabal Context
  const { isLoading, books } = useGlobalContext();
  console.log(books);

  //Checking loading state
  if (isLoading) {
    return <div className="noresult-data">No data Found</div>;
  }

  return (
    <Slider {...settings} className="book-slider">
      {books &&
        books.map((item, id) => {
          return (
            <div className="slider-list-wrap">
              <div key={id} className="slider-list">
                <div className="thumbnail">
                  <img
                    src={item.volumeInfo.imageLinks.thumbnail}
                    alt="book-thumbnail"
                  />
                </div>
                <Link to={`/books/${item.id}/`} onClick={scrollToTop}>
                  {item.volumeInfo.title}
                </Link>
                <p>{item.volumeInfo.authors}</p>
                <p>Published by {item.volumeInfo.publisher}</p>
                {item.volumeInfo.averageRating && (
                  <div className="rating">
                    <span>Ratings: </span>
                    <span>{item.volumeInfo.averageRating} </span>
                    <span>({item.volumeInfo.ratingsCount})</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </Slider>
  );
}

export default Carousel;
