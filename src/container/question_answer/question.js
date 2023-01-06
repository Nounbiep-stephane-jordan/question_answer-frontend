import React from "react";
import axios from "axios";

import avatar from "../../assets/avatar.jpg";
import "./style.css";

const Question = ({
  setLoading,
  setShowReply,
  setErr,
  setData,
  data,
  setReload,
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitQuestion = (e) => {
    setLoading(true);
    e.preventDefault();
    setShowReply(false);
    const url =
      "http://localhost/question and anwer/inserting/insertQuestion.php";
    axios
      .post(url, data)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.data.err) {
          setErr(res.data.err);
        }
        setReload(true);
      })
      .catch((err) => {
        setLoading(false);
        setErr(err);
        setReload(true);
        console.log(err.message);
      });
  };

  return (
    <div className="chat-box-reply question">
      <form onSubmit={submitQuestion} className="form-reply">
        <div className="reply-img-box">
          <img src={avatar} alt="" />
        </div>
        <textarea
          className="text-box"
          type="text"
          placeholder="Add a question..."
          onChange={handleChange}
          name="question"
        />
        <button type="submit">reply</button>
      </form>
    </div>
  );
};

export default Question;
