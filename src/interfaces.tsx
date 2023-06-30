import { ReactNode } from "react";

export interface IComment {
  id: number;
  postId: number;
  author: string;
  avatarURL: string;
  dateTime: Date;
  children: ReactNode;
  applauseQty: number;
}
