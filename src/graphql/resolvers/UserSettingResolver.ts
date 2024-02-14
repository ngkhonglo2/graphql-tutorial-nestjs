import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingInput } from '../utils/CreateUserSettingInput';
import { mockUsersSetting } from 'src/__mocks__/mockUserSetting';

@Resolver()
export class UserSettingResolver {
  @Mutation((returns) => UserSetting)
  createUserSetting(@Args('createUserSettingData') createUserSettingData: CreateUserSettingInput) {
    console.log(createUserSettingData);
    mockUsersSetting.push(createUserSettingData)
    return createUserSettingData
  }
}
