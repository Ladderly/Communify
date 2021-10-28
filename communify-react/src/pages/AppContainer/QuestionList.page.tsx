import firebase from "firebase/compat";
import React, { FC, memo, useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { firestore } from "../../firebase";

interface Props {}

const QuestionList: FC<Props> = (props) => {
  const [questionData, setQuestionData] = useState<
    firebase.firestore.DocumentData[]
  >([]);
  useEffect(() => {
    firestore
      .collection("questions")
      .get()
      .then((questionList) => {
        questionList.docs.forEach((question) => {
          setQuestionData((prev) => [...prev, question.data()]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {questionData.map((question) => {
        return (
          <QuestionCard tag={question.tag} key={question.qid}>
            {question.questionText}
          </QuestionCard>
        );
      })}
    </div>
  );
};

QuestionList.defaultProps = {};

export default memo(QuestionList);
