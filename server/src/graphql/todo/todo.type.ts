import { ObjectType, Field, ID } from 'type-graphql';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Todo {
  @Field(type => ID)
  _id: ObjectId;

  @Field()
  content: string;
}

@ObjectType()
export class DelectionTodo {
  @Field()
  isDelete: boolean;
}
