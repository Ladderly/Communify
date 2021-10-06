import { FC, Fragment, memo, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { Dialog, Transition } from "@headlessui/react";
import { GoPlus } from "react-icons/go";

interface Props {}

const AddQuestionModal: FC<Props> = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
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
              <div className="relative m-auto bg-gray-100 shadow-md h-96 w-96">
                <div className="p-2">
                  <IoMdClose
                    onClick={closeModal}
                    className="absolute w-6 h-6 top-2 left-2 text-secondary-400 hover:bg-gray-200 hover:"
                  />
                  <Dialog.Title className="text-lg font-semibold text-center text-secondary-400">
                    Add Question
                  </Dialog.Title>
                  <input
                    className="w-full mt-24 placeholder-gray-400 bg-gray-100 border-b-2 border-gray-400 hover:border-secondary-400 focus:outline-none"
                    type="text"
                    placeholder="Start your question with 'What','How','Why',etc."
                  />
                </div>
                <hr className="mt-40 border-b-2 border-secondary-400"></hr>
                <div className="flex justify-end mx-1 my-3 space-x-1">
                  <Button onClick={closeModal} theme="outline">
                    Cancel
                  </Button>
                  <Button onClick={closeModal} theme="fill">
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
