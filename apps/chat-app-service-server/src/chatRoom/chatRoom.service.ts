import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatRoomServiceBase } from "./base/chatRoom.service.base";

@Injectable()
export class ChatRoomService extends ChatRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
