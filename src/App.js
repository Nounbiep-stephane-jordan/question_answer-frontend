import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/Header/Header";
import AboutUs from "./container/About us/AboutUs";
import Login from "./container/Auth/login";
import Register from "./container/Auth/register";
import Home from "./container/Home/Home";
import Post from "./container/question_answer/post";

export const UserContext = createContext("");

function App() {
  const [Users, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost/question and anwer/index.php")
      .then((response) => {
        console.log(response, "is the app");
      });
  }, []);

  return (
    <>
      <UserContext.Provider value={Users}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/Register" element={<Register setUser={setUser} />} />
            <Route path="/Aboutus" element={<AboutUs />} />
            <Route path="/post" element={<Post />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
