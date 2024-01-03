import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Period {
  @Field(() => Int, { nullable: true })
  first: number | null;

  @Field(() => Int, { nullable: true })
  second: number | null;
}
