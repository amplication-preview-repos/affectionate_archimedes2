/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Message } from "./Message";
import { MessageCountArgs } from "./MessageCountArgs";
import { MessageFindManyArgs } from "./MessageFindManyArgs";
import { MessageFindUniqueArgs } from "./MessageFindUniqueArgs";
import { CreateMessageArgs } from "./CreateMessageArgs";
import { UpdateMessageArgs } from "./UpdateMessageArgs";
import { DeleteMessageArgs } from "./DeleteMessageArgs";
import { ChatRoomFindManyArgs } from "../../chatRoom/base/ChatRoomFindManyArgs";
import { ChatRoom } from "../../chatRoom/base/ChatRoom";
import { User } from "../../user/base/User";
import { MessageService } from "../message.service";
@graphql.Resolver(() => Message)
export class MessageResolverBase {
  constructor(protected readonly service: MessageService) {}

  async _messagesMeta(
    @graphql.Args() args: MessageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Message])
  async messages(
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    return this.service.messages(args);
  }

  @graphql.Query(() => Message, { nullable: true })
  async message(
    @graphql.Args() args: MessageFindUniqueArgs
  ): Promise<Message | null> {
    const result = await this.service.message(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Message)
  async createMessage(
    @graphql.Args() args: CreateMessageArgs
  ): Promise<Message> {
    return await this.service.createMessage({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Message)
  async updateMessage(
    @graphql.Args() args: UpdateMessageArgs
  ): Promise<Message | null> {
    try {
      return await this.service.updateMessage({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Message)
  async deleteMessage(
    @graphql.Args() args: DeleteMessageArgs
  ): Promise<Message | null> {
    try {
      return await this.service.deleteMessage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ChatRoom], { name: "chatRooms" })
  async findChatRooms(
    @graphql.Parent() parent: Message,
    @graphql.Args() args: ChatRoomFindManyArgs
  ): Promise<ChatRoom[]> {
    const results = await this.service.findChatRooms(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Message): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
