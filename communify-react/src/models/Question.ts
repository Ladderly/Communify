import { Entity } from "./Entity";
import { User } from "./User";

export interface Question extends Entity {
  content: string;
  time: Date;
  author: User;
}
