import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomUpdateInput = {
  description?: string | null;
  message?: MessageWhereUniqueInput | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
