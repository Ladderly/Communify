import React, { FC, memo } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

interface Props {}

const AddQuestionModal: FC<Props> = (props) => {
  return (
    <div className="flex h-screen">
      <div className="relative m-auto bg-gray-100 shadow-md h-96 w-96">
        <div className="p-2">
          <IoMdClose className="absolute w-6 h-6 top-2 left-2 text-secondary-400 hover:bg-gray-200 hover:" />
          <h2 className="text-lg font-semibold text-center text-secondary-400">
            Add Question
          </h2>
          <input
            className="w-full mt-24 placeholder-gray-400 bg-gray-100 border-b-2 border-gray-400 hover:border-secondary-400 focus:outline-none"
            type="text"
            placeholder="Start your question with 'What','How','Why',etc."
          />
        </div>
        <hr className="mt-40 border-b border-secondary-400"></hr>
        <div className="flex justify-end mx-1 my-3 space-x-1">
          <Button theme="outline">Cancel</Button>
          <Button theme="fill">Add Question</Button>
        </div>
      </div>
    </div>
  );
};

AddQuestionModal.defaultProps = {};

export default memo(AddQuestionModal);
