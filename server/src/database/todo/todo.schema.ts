import { prop, Typegoose } from 'typegoose';

class TodoSchema extends Typegoose {
  @prop({ required: true })
  content: string;
}

export default TodoSchema;
