import React, { useState } from "react";
import { Link } from "react-router-dom";

import closeIcon from "../../assets/close.png";
import searchIcon from "../../assets/search.png";
import menu from "../../assets/hamburger.png";
import "./Header.css";
const Header = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <header>
      <nav className="large-menu">
        <Link to="/Home">Home</Link>
        <div className="input-box">
          <img src={searchIcon} alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        <Link to="/post">Question&Answer</Link>
        <Link to="/">Contact</Link>
        <Link to="/Aboutus">About us</Link>
      </nav>
      <nav className="small-menu">
        <img
          className="hamburger"
          onClick={() => setShowmenu(true)}
          src={menu}
          alt="small size menu"
        />

        {showmenu ? (
          <>
            <div className="small-menu-hamburger">
              <img
                className="close"
                onClick={() => setShowmenu(false)}
                src={closeIcon}
                alt="small size menu close icon"
              />
              <Link to="/Home" activeclassname="active">
                Home
              </Link>
              <Link to="/post">Question&Answer</Link>
              <Link to="/">Contact</Link>
              <Link to="/Aboutus">About us</Link>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="input-box">
          <img src={searchIcon} alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
