import { Disclosure } from "@headlessui/react";
import { TextField } from "@mui/material";
import {
  ChangeEvent,
  Fragment,
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoMdShareAlt } from "react-icons/io";
import Button from "../../components/Button";
import { FaPenAlt } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { firestore, storage } from "../../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat";
import { AuthContext } from "../../context/AuthContext";
import AnswerCard from "../../components/AnswerCard";

interface Props {}

const Question: React.FC<Props> = (props) => {
  const inputRef = useRef<any>(null);
  const user = useContext(AuthContext);
  const { questionID } = useParams<any>();
  const [image, setImage] = useState<any>(null);
  const [answer, setAnswer] = useState<string>("");
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
  }, []);
  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files![0]);
  };
  const uploadAnswer = async (url: string = "") => {
    await firestore
      .collection("answers")
      .add({
        answerText: answer,
        qid: questionID,
        created: firebase.firestore.Timestamp.now(),
        uid: user?.uid,
        userName: user?.displayName,
        imageLink: url,
      })
      .then((res) => {
        res.update({
          aid: res.id,
        });
        window.location.reload();
        setAnswer("");
      });
  };
  const uploadImage = (file: any) => {
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "stage_changed",
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            uploadAnswer(url);
            console.log(url);
          });
      }
    );
  };
  const addAnswer = () => {
    image ? uploadImage(image) : uploadAnswer();
  };
  return (
    <div className="flex flex-col mt-10 space-y-4">
      <div className="relative flex flex-col w-2/5 mx-auto bg-gray-100 shadow-lg">
        <h1 className="items-center p-5 text-xl font-semibold h-15">
          Ayaan Bhai kaise kar lete ho?
        </h1>
        <input
          type="file"
          onChange={handleImageChange}
          className="hidden"
          ref={inputRef}
        />
        <Disclosure as={Fragment}>
          <Disclosure.Button as={Fragment}>
            <button className="block mr-auto">
              <FaPenAlt className="w-10 h-10 p-2 ml-4 border rounded-full border-secondary-400 text-secondary-300" />{" "}
            </button>
          </Disclosure.Button>
          <Disclosure.Panel as={Fragment}>
            {({ close }) => (
              <div className="mt-5 ml-4 mr-4 transform ">
                <TextField
                  onChange={handleAnswerChange}
                  value={answer}
                  className="w-full"
                  id="outlined-multiline-static"
                  label="Enter Answer"
                  multiline
                  rows={4}
                  placeholder="Please enter appropriate answer.."
                  color="success"
                />
                <div className="flex justify-end mt-2 space-x-2">
                  <BsFillImageFill className="w-6 h-6 text-secondary-400" />
                  <button
                    onClick={() => inputRef.current.click()}
                    className="text-sm font-semibold text-secondary-400"
                  >
                    Add image
                  </button>
                </div>
                <Button
                  disabled={answer ? false : true}
                  onClick={() => {
                    close();
                    addAnswer();
                  }}
                  className="block w-32 mt-4 mr-auto"
                >
                  Add Answer
                </Button>
              </div>
            )}
          </Disclosure.Panel>
        </Disclosure>
        <div className="mt-4 border-b-2 border-secondary-400"></div>
        <div className="py-2 mx-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold">32 ANSWERS</p>
            <div>
              <button>
                <IoMdShareAlt className="w-8 h-8 rounded-full text-secondary-400 hover:bg-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {answers.map((answer, index) => {
        return (
          <AnswerCard
            key={index}
            resolver={answer.userName}
            answer={answer.answerText}
          ></AnswerCard>
        );
      })}
    </div>
  );
};
Question.defaultProps = {};
export default memo(Question);
