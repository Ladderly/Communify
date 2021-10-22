import React, { FC, memo, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Avatar from "./Avatar";
import { FiArrowDown } from "react-icons/fi";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { useHistory } from "react-router";

interface Props {
  resolver: string;
  answer: string;
  imgSrc?: string;
}

const AnswerCard: FC<Props> = ({ resolver, answer, imgSrc }) => {
  const history = useHistory();
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="relative w-2/5 mx-auto bg-gray-100 shadow-lg">
      <div className="p-5">
        <button>
          <IoMdClose className="absolute w-6 h-6 rounded-full cursor-pointer right-2 top-2 text-secondary-400 hover:bg-gray-300" />
        </button>
        <div className="flex items-center space-x-4">
          <Avatar
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile-pic"
            size="small"
          />
          <span className="font-semibold text-gray-700">{resolver}</span>
        </div>
        {!readMore && (
          <div className="overflow-hidden max-h-16">
            <p>{answer}</p>
          </div>
        )}
        {readMore && (
          <div>
            <p>{answer}</p>
          </div>
        )}
      </div>
      {!readMore && (
        <div>
          <button
            onClick={() => setReadMore(!readMore)}
            className="block mx-auto"
          >
            <FiArrowDown className="w-6 h-6 text-secondary-400 animate-bounce" />
          </button>
        </div>
      )}
      {imgSrc && (
        <img
          className="object-fill w-full mt-4 h-72"
          src={imgSrc}
          alt="answer-context"
        />
      )}
      <div className="mt-4 border-b-2 border-secondary-400"></div>
      <div className="py-2 mx-6">
        <div className="flex items-center justify-between">
          <div className="flex px-4 py-2 space-x-3 border rounded-full w-28 border-secondary-400">
            <button>
              <FaRegThumbsUp className="w-6 h-6 cursor-pointer text-secondary-400" />
            </button>
            <div className="border-r border-secondary-400"></div>
            <button>
              <FaRegThumbsDown className="w-6 h-6 cursor-pointer text-secondary-400" />
            </button>
          </div>
          <div>
            <button>
              <IoMdShareAlt className="w-8 h-8 rounded-full text-secondary-400 hover:bg-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AnswerCard.defaultProps = {};

export default memo(AnswerCard);
