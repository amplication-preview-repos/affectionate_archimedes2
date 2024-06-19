import { ChatRoom } from "../chatRoom/ChatRoom";
import { Message } from "../message/Message";
import { JsonValue } from "type-fest";

export type User = {
  chatRooms?: Array<ChatRoom>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
