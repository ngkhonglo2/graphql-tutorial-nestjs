import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { UserSettingResolver } from './graphql/resolvers/UserSettingResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'testuser',
    //   password: 'testuser',
    //   database: 'graphql_tutorial',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
  controllers: [],
  providers: [UserResolver, UserSettingResolver],
})
export class AppModule {}
