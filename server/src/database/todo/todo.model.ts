import * as mongoose from 'mongoose';
import TodoSchema from './todo.schema';

const TodoModel = new TodoSchema().getModelForClass(TodoSchema, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'todo' }
});

export default TodoModel;
