import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class League {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  logo: string;

  @Field(() => Int)
  season: number;

  @Field()
  round: string;
}