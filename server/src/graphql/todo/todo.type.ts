import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Todo {
  @Field()
  content: string;
}
