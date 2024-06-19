import { Message } from "../message/Message";
import { User } from "../user/User";

export type ChatRoom = {
  createdAt: Date;
  description: string | null;
  id: string;
  message?: Message | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
