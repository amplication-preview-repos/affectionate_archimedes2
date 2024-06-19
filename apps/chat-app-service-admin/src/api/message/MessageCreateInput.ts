import { ChatRoomCreateNestedManyWithoutMessagesInput } from "./ChatRoomCreateNestedManyWithoutMessagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  chatRooms?: ChatRoomCreateNestedManyWithoutMessagesInput;
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
