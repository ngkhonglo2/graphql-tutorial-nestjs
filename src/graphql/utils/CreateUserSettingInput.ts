import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingInput {
  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  receiveNotification: boolean;

  @Field({ nullable: true, defaultValue: false })
  receiceEmails: boolean;
}
