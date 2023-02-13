import React from "react";
import siteLogo from "../assets/images/logo1.jpg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={siteLogo} alt="logo" />
        </Link>
      </div>
      <div className="nav">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/books">
          <div>Books</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
