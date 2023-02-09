import React from "react";
import SearchPage from "../components/SearchPage";
import homeBgImage from "../assets/images/book-bg.jpg";

function Home() {
  return (
    <>
      {/* <div className="home-banner">
        <img src={homeBgImage} alt="homebg" />
      </div> */}
      <SearchPage />
    </>
  );
}

export default Home;
