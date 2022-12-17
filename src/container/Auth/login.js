import React, { useState } from "react";
import "./style.css";
import overlay from "../../assets/overlay.png";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    const url = "http://localhost/question and anwer/auth/login.php";
    axios
      .post(url, data)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.userErr) {
          setErr(res.data.userErr);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setErr(err);
      });
  };

  setTimeout(() => {
    setErr("");
  }, 2000);

  return (
    <>
      {err ? (
        <div className="err">
          <p>{err}</p>
        </div>
      ) : (
        ""
      )}
      <div className="form-container">
        <div className="left">
          <div className="form-overlay"></div>
          <h1>Learn to code by questionning others</h1>
          <p>
            learn through the best and most practical way .Its super easy just
            log in or register
          </p>
        </div>
        <div className="">
          <div className="right-h1">
            <h1>Contact us</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
          >
            <span>Name</span>
            <input type="text" name="name" onChange={handleChange} />

            <span>Password</span>

            <input type="password" name="password" onChange={handleChange} />

            {loading ? (
              <div className="loader"></div>
            ) : (
              <button type="submit">Register</button>
            )}
            <div className="divider"></div>
            <button className="outlined">Register with Google</button>
            <span>register instead ?</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
