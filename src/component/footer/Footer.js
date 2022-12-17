import React from "react";

import copywright from "../../assets/copywright.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import footerImg from "../../assets/footerImage.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <img src={footerImg} alt="footer image" className="footer-img" />
      <div className="foot">
        <footer>
          <h1>Find us on</h1>
          <div className="footer-links">
            <div className="footer-link-box">
              <img src={google} alt="google" />
              <span>Google</span>
            </div>
            <div className="footer-link-box">
              <img src={facebook} alt="facebook" />
              <span>Facebook</span>
            </div>
            <div className="footer-link-box">
              <img src={github} alt="github" />
              <span>Github</span>
            </div>
          </div>
          <div className="footer-copy">
            <p>All wrights reserved sofware</p>
            <img src={copywright} alt="copywright" className="copy" />
            <p> 2022</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
