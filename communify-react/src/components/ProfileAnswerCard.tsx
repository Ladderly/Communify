import React, { FC, memo, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import firebase from "firebase/compat/app";
import { firestore } from "../firebase";
import { useHistory } from "react-router";
import Button from "./Button";

interface Props {
  answer: string;
  imgSrc?: string;
  created: firebase.firestore.Timestamp;
  questionID: string;
}

const ProfileAnswerCard: FC<Props> = ({
  answer,
  imgSrc,
  created,
  questionID,
}) => {
  const history = useHistory();
  const [question, setQuestion] = useState<string>("");
  const [deleteModel, setDeleteModel] = useState<boolean>(false);
  useEffect(() => {
    const findQuestion = async () => {
      try {
        await firestore
          .collection("questions")
          .where("qid", "==", questionID)
          .get()
          .then((questionlist) => {
            console.log("run1");
            setQuestion(questionlist.docs[0].data().questionText);
          });
      } catch (err) {
        console.log(err);
      }
    };
    findQuestion(); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative w-full p-5 mt-4 bg-gray-100 shadow-md">
      {!deleteModel ? (
        <>
          <p className="text-sm font-semibold text-secondary-400">
            {new Date(created.seconds * 1000).toLocaleDateString("en-US")}
          </p>
          <p
            onClick={() => history.push(`/question/${questionID}`)}
            className="mt-4 font-semibold cursor-pointer hover:underline"
          >
            {question}
          </p>
          <p className="mt-6">{answer}</p>
          <button>
            <MdDelete
              onClick={() => setDeleteModel(true)}
              className="absolute w-6 h-6 text-red-500 cursor-pointer right-2 top-2"
            />
          </button>
          {imgSrc && (
            <img
              className="object-contain w-full h-full mt-4"
              src={imgSrc}
              alt="answer-context"
            />
          )}
        </>
      ) : (
        <>
          <p className="font-semibold text-center sm:text-lg text-secondary-400">
            Answer will be deleted permanently
          </p>
          <div className="flex items-center justify-center mt-6 space-x-8">
            <Button onClick={() => setDeleteModel(false)}>Undo</Button>
            <Button theme="warning" onClick={() => setDeleteModel(false)}>
              Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

ProfileAnswerCard.defaultProps = {};

export default memo(ProfileAnswerCard);
