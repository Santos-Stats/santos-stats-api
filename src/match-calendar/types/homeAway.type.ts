import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HomeAway {
  @Field(() => Int, { nullable: true })
  home: number | null;

  @Field(() => Int, { nullable: true })
  away: number | null;
}