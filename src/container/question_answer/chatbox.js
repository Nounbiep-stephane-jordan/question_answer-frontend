import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import EditQuestion from "./editQuestion";

import "./style.css";

const ChatBox = ({
  index,
  avatar,
  question_author,
  showreply,
  setShowReply,
  questions,
  question_id,
  creation_date,
  setReload,
}) => {
  const [showedit, setShowEdit] = useState(false);
  const [err, setErr] = useState(false);
  const Users = useContext(UserContext);
  const deleteQuestion = (e) => {
    e.preventDefault();

    const url =
      "http://localhost/question and anwer/deleting/deleteQuestion.php";
    const data = {
      question_id,
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
                <span className="name">{question_author}</span>

                {Users.name === question_author ? (
                  <span className="currentUser">you</span>
                ) : (
                  ""
                )}
                <span className="time">{creation_date}</span>
              </div>
              {Users.name === question_author ? (
                <div className="reply replied c_flex">
                  <span className="del" onClick={deleteQuestion}>
                    <i className="fa-solid fa-trashcan"></i>Delete
                  </span>
                  <span onClick={() => setShowEdit(!showedit)}>
                    <i className="fa-solid fa-pencil"></i>
                    Edit
                  </span>
                </div>
              ) : (
                <div className="reply s_flex">
                  <span>
                    <i className="fa-solid fa-reply"></i>
                  </span>
                  <span onClick={() => setShowReply(!showreply)}>reply</span>
                </div>
              )}
            </div>
            <div className="para">
              <p>{questions}</p>
            </div>
          </div>
        </div>
      </div>
      {showedit ? (
        <EditQuestion
          setLoading={setReload}
          question_id={question_id}
          setShowReply={setShowEdit}
          setErr={setErr}
          question={questions}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ChatBox;
