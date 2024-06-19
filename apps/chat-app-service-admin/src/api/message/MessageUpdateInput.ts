import { ChatRoomUpdateManyWithoutMessagesInput } from "./ChatRoomUpdateManyWithoutMessagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  chatRooms?: ChatRoomUpdateManyWithoutMessagesInput;
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
