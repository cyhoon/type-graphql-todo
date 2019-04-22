import { Service } from 'typedi';
import { ObjectId } from 'mongodb';
import { NewTodo, NextTodo } from '../graphql/todo/todo.input';
import { TodoModel } from '../database/todo';
import { Todo } from '../graphql/todo/todo.type';

@Service()
export default class TodoService {
  async getTodos(limit?: number, offset?: number): Promise<Todo[]> {
    // return TodoModel.find().sort({ _id: 'DESC' });
    return TodoModel.find()
      .sort({ _id: 'DESC' })
      .skip(offset || 0)
      .limit(limit || 10);
  }

  async createTodo(newTodo: NewTodo) {
    return TodoModel.create(newTodo);
  }

  async updateTodo(nextTodo: NextTodo) {
    const _id = new ObjectId(nextTodo._id);
    const foundTodo = await TodoModel.findOne({ _id }).exec();

    if (!foundTodo) {
      throw Error(`Couldn't find todo to update (${nextTodo._id})`);
    }

    foundTodo.set(nextTodo);

    await foundTodo.save();
    return foundTodo.toObject();
  }

  async deleteTodo(todoId: string) {
    const { n: isDelete } = await TodoModel.deleteOne({ _id: todoId });

    if (!isDelete) {
      return false;
    }

    return true;
  }
}
