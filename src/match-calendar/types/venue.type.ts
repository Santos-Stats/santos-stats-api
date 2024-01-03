import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Venue {
  @Field(() => Int, { nullable: true })
  id: number | null;

  @Field({ nullable: true })
  name: string | null;

  @Field({ nullable: true })
  city: string | null;
}