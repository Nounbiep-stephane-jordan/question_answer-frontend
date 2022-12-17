import React, { useState } from "react";

import closeIcon from "../../assets/close.png";
import searchIcon from "../../assets/search.png";
import menu from "../../assets/hamburger.png";
import "./Header.css";
const Header = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <header>
      <nav className="large-menu">
        <a>Home</a>
        <div className="input-box">
          <img src={searchIcon} alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        <a>Contact</a>
        <a>About us</a>
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
              <a>Home</a>
              <a>Contact</a>
              <a>About us</a>
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
