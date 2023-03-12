import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Edit from "./edit";

const ReplyBox = ({
  avatar,
  index,
  answer_author,
  question_author,
  answer,
  answer_id,
  setReload,
  creation_date,
}) => {
  const [err, setErr] = useState();
  const [showedit, setShowEdit] = useState(false);
  const Users = useContext(UserContext);
  const deleteAnswer = (e) => {
    e.preventDefault();
    const url = "http://localhost/question and anwer/deleting/deleteAnswer.php";
    const data = {
      answer_id,
    };

    axios
      .post(url, data)
      .then((res) => {
        setReload(true);
      })
      .catch((err) => {
        setErr(err.message);
      });
  };
  return (
    <>
      <div className="answer">
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
                <span className="name">{answer_author}</span>

                {Users.name === answer_author ? (
                  <span className="currentUser">you</span>
                ) : (
                  ""
                )}
                <span className="time">{creation_date}</span>
              </div>
              {Users.name === answer_author ? (
                <div className="reply replied c_flex">
                  <span className="del" onClick={deleteAnswer}>
                    <i className="fa-solid fa-trash"></i>
                    {/* Delete */}
                  </span>
                  <span onClick={() => setShowEdit(!showedit)}>
                    <i className="fa-solid fa-pencil"></i>
                    {/* Edit */}
                  </span>
                </div>
              ) : (
                <div className="reply s_flex">
                  <span>
                    <i className="fa-solid fa-reply"></i>
                  </span>
                  <span>reply</span>
                </div>
              )}
            </div>
            <div className="para">
              <pre>
                <p>
                  <span className="repliedTo">{"@" + question_author}</span>{" "}
                  <br />
                  <code>{answer}</code>
                </p>
              </pre>
            </div>
          </div>
        </div>
      </div>
      {showedit ? (
        <Edit
          setLoading={setReload}
          answer_id={answer_id}
          setShowReply={setShowEdit}
          setErr={setErr}
          answer={answer}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ReplyBox;
