import * as graphql from "@nestjs/graphql";
import { ChatRoomResolverBase } from "./base/chatRoom.resolver.base";
import { ChatRoom } from "./base/ChatRoom";
import { ChatRoomService } from "./chatRoom.service";

@graphql.Resolver(() => ChatRoom)
export class ChatRoomResolver extends ChatRoomResolverBase {
  constructor(protected readonly service: ChatRoomService) {
    super(service);
  }
}
