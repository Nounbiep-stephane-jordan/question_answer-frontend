import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import avatar from "../../assets/avatar.jpg";
import { UserContext } from "../../App";

const EditQuestion = ({
  setLoading,
  question_id,
  setShowReply,
  setErr,
  question,
}) => {
  const Users = useContext(UserContext);
  const isAuth = Users.isAuthorized;
  const [data, setData] = useState({
    question: question,
    question_id: question_id,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const editQuestion = (e) => {
    console.log("editiong ");
    setLoading(true);
    e.preventDefault();
    setShowReply(false);

    const url = "http://localhost/question and anwer/editing/editQuestion.php";
    axios
      .post(url, data)
      .then((res) => {
        setLoading(false);
        if (res.data.err) {
          setErr(res.data.err);
        }
      })
      .catch((err) => {
        setLoading(false);
        setErr(err.message);
      });
  };

  return (
    <>
      {isAuth ? (
        <div className="chat-box-reply">
          <form onSubmit={editQuestion} className="form-reply">
            <div className="reply-img-box">
              <img src={avatar} alt="" />
            </div>
            <textarea
              className="text-box"
              type="text"
              placeholder="update question..."
              onChange={handleChange}
              name="question"
              value={data.question}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EditQuestion;
