import React, { useEffect, useState } from "react";
import axios from "axios";

import avatar from "../../assets/avatar.jpg";
import "./style.css";

const Post = () => {
  const [showreply, setShowReply] = useState(false);
  const [replies, setReplies] = useState([]);
  const [questions, setQuestion] = useState([]);
  const [data, setData] = useState({
    question: "",
    author: "mike",
    response: "",
  });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitQuestion = (e) => {
    setLoading(true);
    e.preventDefault();
    setShowReply(false);

    const url = "http://localhost/question and anwer/inserting/insert.php";
    axios
      .post(url, data)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.data.userErr) {
          setErr(res.data.userErr);
        }
      })
      .catch((err) => {
        setLoading(false);
        setErr(err);
        console.log(err.message);
      });
  };

  const submitResponse = () => {};

  useEffect(() => {
    const url = "http://localhost/question and anwer/read/read.php";
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setQuestion(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section>
        <div className="mainContent">
          <h1>Questions</h1>

          {questions.map((question, index) => (
            <>
              <div id="one" key={index}>
                <div className="chat-box grid">
                  <div className="left-box ">
                    <span className="plus-icon">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                    <span className="number">12</span>
                    <span className="minus-icon">
                      <i className="fa-solid fa-minus"></i>
                    </span>
                  </div>
                  <div className="right-box">
                    <div className="userBox c_flex">
                      <div className="img c_flex">
                        <div className="img-box-right">
                          <img src={avatar} alt="" />
                        </div>
                        <span className="name">{question.question_author}</span>
                        <span className="time">1 month ago</span>
                      </div>
                      <div className="reply s_flex">
                        <span>
                          <i className="fa-solid fa-reply"></i>
                        </span>
                        <span onClick={() => setShowReply(!showreply)}>
                          reply
                        </span>
                      </div>
                    </div>
                    <div className="para">
                      <p>{question.questions}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="replies" key={index + question.question}>
                <h2>Answers</h2>
                <div>
                  <div className="chat-box s_flex">
                    <div className="left-box ">
                      <span className="plus-icon">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                      <span className="number">4</span>
                      <span className="minus-icon">
                        <i className="fa-solid fa-minus"></i>
                      </span>
                    </div>
                    <div className="right-box">
                      <div className="userBox c_flex">
                        <div className="img c_flex">
                          <div className="img-box-right">
                            <img src={avatar} alt="" />
                          </div>
                          <span className="name">{question.answer_author}</span>
                          <span className="time">1 week ago</span>
                        </div>
                        <div className="reply s_flex">
                          <span>
                            <i className="fa-solid fa-reply"></i>
                          </span>
                          <span>reply</span>
                        </div>
                      </div>
                      <div className="para">
                        <p>
                          <span className="repliedTo">
                            {question.question_author}
                          </span>
                          {question.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          {showreply ? (
            <>
              <div className="chat-box-reply">
                <form onSubmit={submitQuestion} className="form-reply">
                  <div className="reply-img-box">
                    <img src={avatar} alt="" />
                  </div>
                  <textarea
                    className="text-box"
                    type="text"
                    placeholder="Add a response..."
                    onChange={handleChange}
                    name="response"
                  />
                  <button type="submit">reply</button>
                </form>
              </div>
            </>
          ) : (
            <>{loading ? <div className="loader"></div> : ""}</>
          )}

          <h2>Ask your question ?</h2>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <>
              <div className="chat-box-reply">
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
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Post;
