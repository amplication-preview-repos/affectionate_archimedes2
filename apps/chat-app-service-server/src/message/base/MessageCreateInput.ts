/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChatRoomCreateNestedManyWithoutMessagesInput } from "./ChatRoomCreateNestedManyWithoutMessagesInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MessageCreateInput {
  @ApiProperty({
    required: false,
    type: () => ChatRoomCreateNestedManyWithoutMessagesInput,
  })
  @ValidateNested()
  @Type(() => ChatRoomCreateNestedManyWithoutMessagesInput)
  @IsOptional()
  @Field(() => ChatRoomCreateNestedManyWithoutMessagesInput, {
    nullable: true,
  })
  chatRooms?: ChatRoomCreateNestedManyWithoutMessagesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { MessageCreateInput as MessageCreateInput };
