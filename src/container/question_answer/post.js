import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import avatar from "../../assets/avatar.jpg";
import "./style.css";
import Question from "./question";
import Response from "./response";
import { UserContext } from "../../App";
import ChatBox from "./chatbox";
import ReplyBox from "./replyBox";

const Post = () => {
  const Users = useContext(UserContext);
  const [showreply, setShowReply] = useState(false);
  const [questions, setQuestion] = useState([]);
  const [showedit, setShowEdit] = useState(false);
  const [data, setData] = useState({
    question: null,
    author: Users.name || "",
  });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const url = "http://localhost/question and anwer/read/read.php";
    axios
      .get(url)
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, [loading, reload]);

  return (
    <>
      <section className="post">
        <div className="mainContent">
          {questions.map((question, index) => (
            <>
              {console.log(typeof question.creation_date, "here")}
              <h1>Question</h1>
              <ChatBox
                index={index}
                avatar={avatar}
                question_author={question.question_author}
                showreply={showreply}
                setShowReply={setShowReply}
                questions={question.questions}
                question_id={question.question_id}
                creation_date={question.creation_date}
                setReload={setReload}
              />
              {showreply ? (
                <>
                  <Response
                    question_id={question.question_id}
                    setLoading={setLoading}
                    setShowReply={setShowReply}
                    setErr={setErr}
                  />
                </>
              ) : (
                <>{loading ? <div className="loader"></div> : ""}</>
              )}
              {question.answers ? (
                <>
                  <div className="replies" key={index}>
                    <h2>Answer</h2>
                    {question.answers.map((answer) => {
                      if (answer.question_id === question.question_id) {
                        return (
                          <ReplyBox
                            avatar={avatar}
                            index={index + answer.answer}
                            answer_author={answer.answer_author}
                            question_author={question.question_author}
                            answer={answer.answer}
                            answer_id={answer.answer_id}
                            setReload={setReload}
                            creation_date={answer.creation_date}
                          />
                        );
                      }
                    })}
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          ))}

          <h2 className="h2">Ask your question ?</h2>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <>
              <Question
                setLoading={setLoading}
                setReload={setReload}
                setShowReply={setShowReply}
                setErr={setErr}
                setData={setData}
                data={data}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Post;
