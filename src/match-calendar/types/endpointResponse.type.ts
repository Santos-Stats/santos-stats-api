import { Resolver, Query, Args, ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from './status.type';
import { Venue } from './venue.type';
import { Team } from './team.type';
import { HomeAway } from './homeAway.type';
import { League } from './league.type';

@ObjectType()
export class EndpointResponse {
  @Field()
  status: string;

  @Field(() => League)
  league: League;

  @Field()
  round: string;

  @Field(() => Venue)
  stadium: Venue;

  @Field(() => Int, { nullable: true })
  date: number | null;

  @Field(() => Team)
  homeTeam: Team;

  @Field(() => Team)
  awayTeam: Team;

  @Field({ nullable: true })
  refereeName: string | null;

  @Field(() => HomeAway)
  goals: HomeAway;
}