import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Team {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  logo: string;

  @Field({ nullable: true })
  winner: boolean | null;
}