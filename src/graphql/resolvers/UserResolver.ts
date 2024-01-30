import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/User';

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return {
      id: 1,
      userName: 'phong',
      displayName: 'pnt',
    };
  }
}
