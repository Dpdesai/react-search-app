import { SET_LOADING, SET_BOOKS, SHOW_BOOK, HANDLE_SEARCH } from "./actionVars";

const bookReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_BOOKS:
      return {
        ...state,
        isLoading: false,
        books: action.payload.books,
        price: action.payload.price,
      };
    case SHOW_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id === action.payload),
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      throw new Error(`no matching action type`);
  }
};

export default bookReducer;
