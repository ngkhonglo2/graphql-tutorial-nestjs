import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../models/UserSetting';
import { mockUsersSetting } from 'src/__mocks__/mockUserSetting';
import { CreateUserInput } from '../utils/CreateUserInput';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((item) => item.id === id);
  }

  @Query((returns) => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUsersSetting.find((setting) => setting.userId === user.id);
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    const { userName, displayName } = createUserData;
    const newUser = { userName, displayName, id: ++mockUsers.length };
    mockUsers.push(newUser);
    return newUser;
  }
}
