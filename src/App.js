import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import SearchPage from "./components/SearchPage";
import About from "./pages/About";
import Book from "./pages/Book";
import Home from "./pages/Home";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<SearchPage />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
