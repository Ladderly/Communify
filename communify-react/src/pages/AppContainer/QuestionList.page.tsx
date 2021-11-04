import firebase from "firebase/compat";
import React, { FC, memo, useContext, useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { AuthContext } from "../../context/AuthContext";
import { firestore } from "../../firebase";

interface Props {}

const QuestionList: FC<Props> = (props) => {
  const user = useContext(AuthContext);
  if (!sessionStorage.getItem("user")) {
    sessionStorage.setItem("user", user!.uid);
  }
  const [questionData, setQuestionData] = useState<
    firebase.firestore.DocumentData[]
  >([]);
  useEffect(() => {
    const fetchList = async () => {
      await firestore
        .collection("questions")
        .where("uid", "!=", sessionStorage.getItem("user")!)
        .get()
        .then((questionList) => {
          questionList.docs.forEach((question) => {
            setQuestionData((prev) => [...prev, question.data()]);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {questionData.map((question) => {
        return (
          <QuestionCard
            questionID={question.qid}
            tag={question.tag}
            key={question.qid}
          >
            {question.questionText}
          </QuestionCard>
        );
      })}
    </div>
  );
};

QuestionList.defaultProps = {};

export default memo(QuestionList);
