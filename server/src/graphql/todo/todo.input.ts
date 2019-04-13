import { InputType, Field } from 'type-graphql';

@InputType()
export class NewPost {
  @Field()
  content: string;
}
