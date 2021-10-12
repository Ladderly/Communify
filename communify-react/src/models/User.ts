import { Answer } from "./Answer";
import { Entity } from "./Entity";
import { Question } from "./Question";

export interface User extends Entity {
  firstName: string;
  lastName: string;
  email: string;
  questionList: Question[];
  answerList: Answer[];
}
