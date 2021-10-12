import { Entity } from "./Entity";
import { User } from "./User";

export interface Answer extends Entity {
  author: User;
  content: string;
  questionID: number;
  image?: string;
  upvotes: number;
  downvotes: number;
  comments: Comment[];
}
