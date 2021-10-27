import React, { FC, memo } from "react";
import { IoMdClose, IoMdShareAlt } from "react-icons/io";
import { useHistory } from "react-router";
import Button from "./Button";

interface Props {
  children: string;
}

const QuestionCard: FC<Props> = ({ children }) => {
  const history = useHistory();
  return (
    <div className="relative w-2/5 mx-auto mt-4 bg-gray-100 shadow-lg">
      <div className="px-5 pt-3">
        <h2
          onClick={() => {
            history.push("/question");
          }}
          className="text-lg font-semibold cursor-pointer hover:underline"
        >
          {children}
        </h2>
        <button>
          <IoMdClose className="absolute w-6 h-6 rounded-full cursor-pointer right-2 top-2 text-secondary-400 hover:bg-gray-300" />
        </button>
        <div className="mt-8 border-b-2 border-secondary-400"></div>
        <div className="flex items-center justify-between py-2 mx-6">
          <Button>Answer</Button>
          <button>
            <IoMdShareAlt className="w-8 h-8 rounded-full text-secondary-300 hover:bg-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

QuestionCard.defaultProps = {};

export default memo(QuestionCard);
