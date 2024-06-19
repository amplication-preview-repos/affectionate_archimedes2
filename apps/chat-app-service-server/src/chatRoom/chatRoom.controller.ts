import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatRoomService } from "./chatRoom.service";
import { ChatRoomControllerBase } from "./base/chatRoom.controller.base";

@swagger.ApiTags("chatRooms")
@common.Controller("chatRooms")
export class ChatRoomController extends ChatRoomControllerBase {
  constructor(protected readonly service: ChatRoomService) {
    super(service);
  }
}
