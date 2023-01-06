import React, { useContext, useState } from "react";
import axios from "axios";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigation = useNavigate();
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    err: "",
    errType: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "http://localhost/question and anwer/auth/login.php";
    axios
      .post(url, data)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.data.userErr) {
          return setErr({ err: res.data.userErr, errType: res.data.errType });
        }
        setUser(res.data);
        return navigation("/post");
      })
      .catch((err) => {
        setLoading(false);
        setErr({ err: err.message, errType: "" });
      });
  };

  return (
    <>
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
            {err.errType === "all" ? (
              <span className="error">{err.err}</span>
            ) : (
              ""
            )}

            <span>Password</span>
            <input type="password" name="password" onChange={handleChange} />
            {err.errType === "password" || err.errType === "all" ? (
              <span className="error">{err.err}</span>
            ) : (
              ""
            )}

            {loading ? (
              <div className="loader"></div>
            ) : (
              <button type="submit">Register</button>
            )}
            <div className="divider"></div>
            <button className="outlined">Register with Google</button>
            <span>
              <Link to="/Register">Register instead ?</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
