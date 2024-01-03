import { ObjectType, Field } from '@nestjs/graphql';
import { Fixture } from './fixture.type';
import { League } from './league.type';
import { HomeAway } from './homeAway.type';
import { Team } from './team.type';
import { Score } from './score.type';

@ObjectType()
export class Match {
  @Field(() => Fixture)
  fixture: Fixture;

  @Field(() => League)
  league: League;

  @Field(() => Team)
  teams: {
    home: Team;
    away: Team;
  };

  @Field(() => HomeAway)
  goals: HomeAway;

  @Field(() => Score)
  score: Score;
}