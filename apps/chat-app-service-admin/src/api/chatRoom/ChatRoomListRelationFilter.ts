import { ChatRoomWhereInput } from "./ChatRoomWhereInput";

export type ChatRoomListRelationFilter = {
  every?: ChatRoomWhereInput;
  some?: ChatRoomWhereInput;
  none?: ChatRoomWhereInput;
};
