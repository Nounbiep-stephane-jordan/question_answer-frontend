import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/Header/Header";
import AboutUs from "./container/About us/AboutUs";
import Login from "./container/Auth/login";
import Register from "./container/Auth/register";
import Home from "./container/Home/Home";
import Post from "./container/question_answer/post";

function App() {
  return (
    <>
      <Header />
      {/* <AboutUs /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Post />
      <Footer />
    </>
  );
}

export default App;
