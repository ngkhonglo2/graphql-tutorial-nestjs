import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingInput } from '../utils/CreateUserSettingInput';
import { UserSettingService } from 'src/users/UserSettingService';

@Resolver()
export class UserSettingResolver {
  constructor(private userSettingService: UserSettingService) {}
  @Mutation((returns) => UserSetting)
  async createUserSetting(
    @Args('createUserSettingData')
    createUserSettingData: CreateUserSettingInput,
  ) {
    const userSetting = await this.userSettingService.createUserSettings(
      createUserSettingData,
    );
    return userSetting;
  }
}
