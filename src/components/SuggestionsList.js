import { Link } from "react-router-dom";

function SuggestionsList({ book }) {
  //function to return loaded JSX
  const loaded = () => {
    return (
      <div className="result-data">
        {book.map((item, id) => {
          return (
            <div key={id} className="books-list">
              {/* <p>{item.id}</p> */}
              <div className="book-thumbnail">
                <img src={item.volumeInfo.imageLinks.thumbnail} />
              </div>
              <Link to={`/books/${item.id}`}>{item.volumeInfo.title}</Link>
              <div>By {item.volumeInfo.authors}</div>
              <div>{item.saleInfo.price}</div>
              <div>Published by {item.volumeInfo.publisher}</div>
              <div className="rating">
                <span>{item.volumeInfo.averageRating}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return (
      <div className="result-data">
        <h2>No Books to Display</h2>
      </div>
    );
  };

  //Ternary operator will determine which functions JSX we will return
  return book ? loaded() : loading();
}

// We must export the component to use it in other files
export default SuggestionsList;
