import {
  ChangeEvent,
  FC,
  Fragment,
  memo,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { Dialog, Transition } from "@headlessui/react";
import { GoPlus } from "react-icons/go";
import { firestore } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/compat";
import { Autocomplete, TextField } from "@mui/material";
import { useHistory } from "react-router";

interface Props {}
export const tags = [
  "Java",
  "React",
  "C++",
  "Machine Learning",
  "C",
  "Python",
  "Angular",
  "Web Development",
  "Competitive Programming",
];
const AddQuestionModal: FC<Props> = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    console.log("close");
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const user = useContext(AuthContext);
  const history = useHistory();
  const [question, setQuestion] = useState<string>("");
  const [tag, setTag] = useState<string | null>("");
  const [value, setValue] = useState("");
  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setQuestion(e.target.value);
  };
  const handleTagChange = (
    e: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setTag(value);
  };
  const addNewQuestion = () => {
    console.log(question);
    console.log(tag);
    firestore.collection("questions").doc().set({
      questionText: question,
      uid: user?.uid,
      created: firebase.firestore.Timestamp.now(),
      tag: tag,
    });
  };
  return (
    <div className="fixed bottom-10 right-1/3">
      <button className="p-2 rounded-full bg-secondary-200" onClick={openModal}>
        <GoPlus className="w-8 h-8 text-white" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            entered="opacity-30"
            leave="ease-in duration-200"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex h-screen">
              <div className="relative h-auto m-auto bg-gray-100 rounded-md shadow-md w-96">
                <div className="p-2">
                  <IoMdClose
                    onClick={closeModal}
                    className="absolute w-6 h-6 top-2 left-2 text-secondary-400 hover:bg-gray-200 hover:"
                  />
                  <Dialog.Title className="text-lg font-semibold text-center text-secondary-400">
                    Add Question
                  </Dialog.Title>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Enter your Question"
                    multiline
                    maxRows={4}
                    sx={{
                      marginTop: 4,
                    }}
                    color="success"
                    fullWidth
                    placeholder={
                      "Start your question with 'What','How','Why',etc."
                    }
                    value={value}
                    onChange={handleQuestionChange}
                  />
                  <Autocomplete
                    onChange={handleTagChange}
                    className="mt-5"
                    disablePortal
                    id="combo-box-demo"
                    options={tags}
                    sx={{
                      width: 200,
                    }}
                    renderInput={(params) => (
                      <TextField color="success" {...params} label="Tag" />
                    )}
                  />
                </div>
                <hr className="mt-40 border-b-2 border-secondary-400"></hr>
                <div className="flex justify-end mx-1 my-3 space-x-1">
                  <Button
                    onClick={() => {
                      closeModal();
                      setValue("");
                    }}
                    theme="outline"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      closeModal();
                      setValue("");
                      if (user) {
                        addNewQuestion();
                      } else {
                        history.push("/login");
                      }
                    }}
                    theme="fill"
                  >
                    Add Question
                  </Button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

AddQuestionModal.defaultProps = {};

export default memo(AddQuestionModal);
