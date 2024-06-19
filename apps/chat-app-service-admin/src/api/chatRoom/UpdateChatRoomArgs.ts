import { ChatRoomWhereUniqueInput } from "./ChatRoomWhereUniqueInput";
import { ChatRoomUpdateInput } from "./ChatRoomUpdateInput";

export type UpdateChatRoomArgs = {
  where: ChatRoomWhereUniqueInput;
  data: ChatRoomUpdateInput;
};
