import { ObjectType, Field } from '@nestjs/graphql';
import { HomeAway } from './homeAway.type';

@ObjectType()
export class Score {
  @Field(() => HomeAway)
  halftime: HomeAway;

  @Field(() => HomeAway)
  fulltime: HomeAway;

  @Field(() => HomeAway)
  extratime: HomeAway;

  @Field(() => HomeAway)
  penalty: HomeAway;
}