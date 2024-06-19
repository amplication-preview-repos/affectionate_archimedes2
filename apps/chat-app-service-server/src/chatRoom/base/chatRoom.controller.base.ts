/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChatRoomService } from "../chatRoom.service";
import { ChatRoomCreateInput } from "./ChatRoomCreateInput";
import { ChatRoom } from "./ChatRoom";
import { ChatRoomFindManyArgs } from "./ChatRoomFindManyArgs";
import { ChatRoomWhereUniqueInput } from "./ChatRoomWhereUniqueInput";
import { ChatRoomUpdateInput } from "./ChatRoomUpdateInput";

export class ChatRoomControllerBase {
  constructor(protected readonly service: ChatRoomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChatRoom })
  async createChatRoom(
    @common.Body() data: ChatRoomCreateInput
  ): Promise<ChatRoom> {
    return await this.service.createChatRoom({
      data: {
        ...data,

        message: data.message
          ? {
              connect: data.message,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ChatRoom] })
  @ApiNestedQuery(ChatRoomFindManyArgs)
  async chatRooms(@common.Req() request: Request): Promise<ChatRoom[]> {
    const args = plainToClass(ChatRoomFindManyArgs, request.query);
    return this.service.chatRooms({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chatRoom(
    @common.Param() params: ChatRoomWhereUniqueInput
  ): Promise<ChatRoom | null> {
    const result = await this.service.chatRoom({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChatRoom(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() data: ChatRoomUpdateInput
  ): Promise<ChatRoom | null> {
    try {
      return await this.service.updateChatRoom({
        where: params,
        data: {
          ...data,

          message: data.message
            ? {
                connect: data.message,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          name: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChatRoom(
    @common.Param() params: ChatRoomWhereUniqueInput
  ): Promise<ChatRoom | null> {
    try {
      return await this.service.deleteChatRoom({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          name: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
