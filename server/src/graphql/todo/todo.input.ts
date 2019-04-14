import { InputType, Field, ID } from 'type-graphql';
import { ObjectId } from 'mongodb';

@InputType()
export class NewTodo {
  @Field(type => ID, { nullable: true })
  _id?: ObjectId;

  @Field()
  content: string;
}

@InputType()
export class NextTodo {
  @Field(type => ID)
  _id: ObjectId;

  @Field()
  content: string;
}
