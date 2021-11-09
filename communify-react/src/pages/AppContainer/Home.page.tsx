import { FC, memo, useEffect, useState } from "react";
import AddQuestionModal from "../../components/AddQuestionModal";
import QACard from "../../components/QACard";
import firebase from "firebase/compat/app";
import { firestore } from "../../firebase";

interface Props {}

const Home: FC<Props> = (props) => {
  const [answers, setAnswers] = useState<firebase.firestore.DocumentData[]>([]);
  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        await firestore
          .collection("answers")
          .get()
          .then((answerList) => {
            answerList.docs.forEach((answer) => {
              console.log("run");
              setAnswers((prev) => [...prev, answer.data()]);
            });
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchAnswers();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full px-2 mt-6 space-y-4 sm:w-2/5 sm:mx-auto sm:px-0">
        {answers.map((answer, index) => {
          return (
            <QACard
              profile={`https://randomuser.me/api/portraits/men/${index}.jpg`}
              title={answer.questionText}
              key={index}
              resolver={answer.userName}
              answer={answer.answerText}
              imgSrc={answer.imageLink}
              id={answer.qid}
            ></QACard>
          );
        })}
      </div>
      <AddQuestionModal />
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
