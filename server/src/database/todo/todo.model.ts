import TodoSchema from './todo.schema';

const TodoModel = new TodoSchema().getModelForClass(TodoSchema);

export default TodoModel;
