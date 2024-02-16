import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../graphql/models/UserSetting';
import { mockUsersSetting } from 'src/__mocks__/mockUserSetting';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { Inject } from '@nestjs/common';
import { UserService } from './UserService';

@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((item) => item.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUser();
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUsersSetting.find((setting) => setting.userId === user.id);
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
