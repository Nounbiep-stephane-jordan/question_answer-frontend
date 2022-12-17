import React from "react";

import github from "../../assets/github.png";
import linked from "../../assets/linkedin.png";
import avatar from "../../assets/avatar.jpg";
import "./style.css";
const AboutUs = () => {
  const template = [
    { name: "ben", title: "web developer/student" },
    { name: "Mike", title: "web developer/student" },
    { name: "John", title: "web developer/student" },
  ];
  return (
    <div className="about">
      {template.map((item) => (
        <div className="about-box">
          <div className="about-overlay">
            <div className="about-overlay-img">
              <img src={github} alt="github" />
            </div>
            <div className="about-overlay-img">
              <img src={linked} alt="github" />
            </div>
          </div>
          <div className="blur">
            <div className="about-top">
              <div className="img-box">
                <img src={avatar} alt="about" />
              </div>
              <span>{item.name}</span>
            </div>
            <h4>{item.title}</h4>
            <p>Hi am {item.name} web developer and software at siantou</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
