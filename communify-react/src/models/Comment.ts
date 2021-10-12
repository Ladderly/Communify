import { Entity } from "./Entity";
import { User } from "./User";

export interface Comment extends Entity {
  content: string;
  author: User;
}
