import { Resolver, Query, Args, ObjectType, Field, Int } from '@nestjs/graphql';
import { Period } from './period.type';
import { Venue } from './venue.type';
import { Status } from './status.type';

@ObjectType()
export class Fixture {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  referee: string | null;

  @Field()
  date: string;

  @Field(() => Int)
  timestamp: number;

  @Field(() => Period)
  periods: Period;

  @Field(() => Venue)
  venue: Venue;

  @Field(() => Status)
  status: Status;
}