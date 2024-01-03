import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Status {
  @Field()
  long: string;
}