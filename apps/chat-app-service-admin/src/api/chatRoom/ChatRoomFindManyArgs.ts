import { ChatRoomWhereInput } from "./ChatRoomWhereInput";
import { ChatRoomOrderByInput } from "./ChatRoomOrderByInput";

export type ChatRoomFindManyArgs = {
  where?: ChatRoomWhereInput;
  orderBy?: Array<ChatRoomOrderByInput>;
  skip?: number;
  take?: number;
};
