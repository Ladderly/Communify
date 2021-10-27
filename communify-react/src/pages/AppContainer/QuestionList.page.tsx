import React, { FC, memo } from "react";
import QuestionCard from "../../components/QuestionCard";

interface Props {}

const QuestionList: FC<Props> = (props) => {
  return (
    <div>
      <QuestionCard>What is React?</QuestionCard>
      <QuestionCard>What is Javascript?</QuestionCard>
      <QuestionCard>What is Facebook?</QuestionCard>
      <QuestionCard>What is Angular?</QuestionCard>
    </div>
  );
};

QuestionList.defaultProps = {};

export default memo(QuestionList);
