import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
