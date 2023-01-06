import React, { useContext, useState } from "react";
import axios from "axios";

import avatar from "../../assets/avatar.jpg";
import { UserContext } from "../../App";

const Response = ({ setLoading, question_id, setShowReply, setErr }) => {
  const Users = useContext(UserContext);
  const isAuth = Users.isAuthorized;
  const [data, setData] = useState({
    answer: "",
    question_id: question_id,
    author: Users.name,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitResponse = (e) => {
    setLoading(true);
    e.preventDefault();
    setShowReply(false);

    const url =
      "http://localhost/question and anwer/inserting/insertAnswer.php";
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
        setErr(err);
      });
  };
  return (
    <>
      {isAuth ? (
        <div className="chat-box-reply">
          <form onSubmit={submitResponse} className="form-reply">
            <div className="reply-img-box">
              <img src={avatar} alt="" />
            </div>
            <textarea
              className="text-box"
              type="text"
              placeholder="Add a response..."
              onChange={handleChange}
              name="answer"
            />
            <button type="submit">reply</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Response;
