import { ChatRoom } from "../chatRoom/ChatRoom";
import { User } from "../user/User";

export type Message = {
  chatRooms?: Array<ChatRoom>;
  content: string | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
