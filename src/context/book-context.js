import React, { useContext, useEffect, useReducer } from "react";
import bookReducer from "./bookReducer";
import { SET_LOADING, SET_BOOKS, SHOW_BOOK, HANDLE_SEARCH } from "./actionVars";

const apiKey = "AIzaSyC-xx-W3FEDlTN80i3CORz3bjLymoCD3Ec";

const BookContext = React.createContext();

const intialState = {
  isLoading: true,
  books: [],
  price: 0,
  search: "harry potter",
};

const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, intialState);

  const fetchData = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?apikey=${apiKey}&q=${state.search}`
      );
      const data = await response.json();
      console.log(data);
      //   localStorage.setItem("user", JSON.stringify([...state, data]));
      dispatch({
        type: SET_BOOKS,
        payload: {
          books: data.items,
          price: data.price,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const showBook = (id) => {
    dispatch({ type: SHOW_BOOK, payload: id });
    console.log(id);
  };

  const handleSearch = (search) => {
    dispatch({ type: HANDLE_SEARCH, payload: search });
    // console.log(search);
  };

  useEffect(() => {
    fetchData();
  }, [state.search]);

  return (
    <BookContext.Provider value={{ ...state, showBook, handleSearch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(BookContext);
};

export { BookContext, BookProvider };
