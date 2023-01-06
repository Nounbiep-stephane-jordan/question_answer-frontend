import React from "react";

import AboutUs from "../About us/AboutUs";
import "./Home.css";
import sammy from "../../assets/sammy-line-17.png";
import sammyOnline from "../../assets/sammy-line-woman-chatting-online.png";

const Home = () => {
  return (
    <main>
      <section>
        <h2>Why Us</h2>
        <aside>
          <div className="img">
            <img src={sammy} alt="girl" />
          </div>
          <div className="text">
            <h2>Instant Answering</h2>
            <p>
              you will have the opportunity of communicating freely and getting
              answered instantly
            </p>
          </div>
        </aside>

        <aside>
          <div className="text">
            <h2>Direct Contact</h2>
            <p>
              you will have the opportunity of chatting directly with our
              experts and learn from them
            </p>
          </div>
          <div className="img">
            <img alt="girl" src={sammyOnline} />
          </div>
        </aside>
      </section>

      <section>
        <h2>Testimonials</h2>
        <AboutUs />
      </section>
    </main>
  );
};

export default Home;
