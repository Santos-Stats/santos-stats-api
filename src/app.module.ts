import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MatchCalendarResolver } from './match-calendar/match-calendar.resolver';
import { MatchCalendarService } from './match-calendar/match-calendar.service';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [MatchCalendarResolver, MatchCalendarService],
})
export class AppModule {}
