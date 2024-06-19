import { Module } from "@nestjs/common";
import { ChatRoomModuleBase } from "./base/chatRoom.module.base";
import { ChatRoomService } from "./chatRoom.service";
import { ChatRoomController } from "./chatRoom.controller";
import { ChatRoomResolver } from "./chatRoom.resolver";

@Module({
  imports: [ChatRoomModuleBase],
  controllers: [ChatRoomController],
  providers: [ChatRoomService, ChatRoomResolver],
  exports: [ChatRoomService],
})
export class ChatRoomModule {}
