import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import avatar from "../../assets/avatar.jpg";
import { UserContext } from "../../App";

const Edit = ({ setLoading, answer_id, setShowReply, setErr, answer }) => {
  const Users = useContext(UserContext);
  const isAuth = Users.isAuthorized;
  const [data, setData] = useState({
    answer: answer,
    answer_id: answer_id,
    author: Users.name,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const editResponse = (e) => {
    console.log("editiong ");
    setLoading(true);
    e.preventDefault();
    setShowReply(false);

    const url = "http://localhost/question and anwer/editing/editAnswer.php";
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
          <form onSubmit={editResponse} className="form-reply">
            <div className="reply-img-box">
              <img src={avatar} alt="" />
            </div>
            <textarea
              className="text-box"
              type="text"
              placeholder="update response..."
              onChange={handleChange}
              name="answer"
              value={data.answer}
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

export default Edit;
