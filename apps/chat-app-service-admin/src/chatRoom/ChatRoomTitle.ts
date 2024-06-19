import { ChatRoom as TChatRoom } from "../api/chatRoom/ChatRoom";

export const CHATROOM_TITLE_FIELD = "name";

export const ChatRoomTitle = (record: TChatRoom): string => {
  return record.name?.toString() || String(record.id);
};
