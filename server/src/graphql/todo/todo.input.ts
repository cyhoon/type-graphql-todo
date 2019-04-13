import { InputType, Field, ID } from 'type-graphql';
import { ObjectId } from 'mongodb';

@InputType()
export class TodoArgs {
  @Field(type => ID, { nullable: true })
  _id?: ObjectId;

  @Field()
  content: string;
}
