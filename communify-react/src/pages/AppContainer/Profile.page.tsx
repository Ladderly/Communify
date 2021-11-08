import React, {
  FC,
  Fragment,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import Avatar from "../../components/Avatar";
import { AuthContext } from "../../context/AuthContext";
import { Tab } from "@headlessui/react";
import firebase from "firebase/compat/app";
import { firestore } from "../../firebase";
import { FaEdit } from "react-icons/fa";
import ProfileQuestionCard from "../../components/ProfileQuestionCard";
import ProfileAnswerCard from "../../components/ProfileAnswerCard";

interface Props {}

const Profile: FC<Props> = (props) => {
  const user = useContext(AuthContext);
  if (!sessionStorage.getItem("user")) {
    sessionStorage.setItem("user", user!.uid);
  }
  const [questionData, setQuestionData] = useState<
    firebase.firestore.DocumentData[]
  >([]);
  const [answers, setAnswers] = useState<firebase.firestore.DocumentData[]>([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      await firestore
        .collection("questions")
        .where("uid", "==", sessionStorage.getItem("user")!)
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
    const fetchAnswers = async () => {
      try {
        await firestore
          .collection("answers")
          .where("uid", "==", sessionStorage.getItem("user")!)
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
    fetchQuestions();
    fetchAnswers();
  }, []);
  return (
    <div className="w-full rounded-md shadow-md sm:w-3/5 sm:mx-auto bg-gray-50">
      <div className="p-5">
        <div className="flex items-center space-x-5">
          <div className="relative">
            <Avatar
              size="large"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile-pic"
            />
            <FaEdit className="absolute p-1 border-2 rounded-full cursor-pointer w-7 h-7 bottom-1 right-2 border-secondary-400 text-secondary-400" />
          </div>
          <p className="text-xl font-bold sm:text-4xl ">{user?.displayName}</p>
        </div>
        <Tab.Group>
          <Tab.List className="flex justify-around w-full mt-10 mb-2">
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "text-secondary-400 border-b-2 border-secondary-400 font-bold cursor-pointer text-lg"
                      : " text-black font-bold cursor-pointer text-lg"
                  }
                >
                  Questions
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "text-secondary-400 border-b-2 border-secondary-400 font-bold cursor-pointer text-lg"
                      : " text-black font-bold cursor-pointer text-lg"
                  }
                >
                  Answers
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {questionData.length !== 0 ? (
                questionData.map((question) => {
                  return (
                    <ProfileQuestionCard
                      questionID={question.qid}
                      tag={question.tag}
                      key={question.qid}
                    >
                      {question.questionText}
                    </ProfileQuestionCard>
                  );
                })
              ) : (
                <div className="my-20 text-xl font-semibold text-center text-secondary-400">
                  Sorry, there are no questions to display
                </div>
              )}
            </Tab.Panel>
            <Tab.Panel>
              {answers.length !== 0 ? (
                answers.map((answer, index) => {
                  return (
                    <ProfileAnswerCard
                      key={index}
                      answer={answer.answerText}
                      imgSrc={answer.imageLink}
                      created={answer.created}
                      questionID={answer.qid}
                    ></ProfileAnswerCard>
                  );
                })
              ) : (
                <div className="my-20 text-xl font-semibold text-center text-secondary-400">
                  Sorry, there are no answers to display
                </div>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
