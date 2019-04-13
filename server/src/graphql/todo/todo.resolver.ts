import { Todo } from './todo.type';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { TodoArgs } from './todo.input';

@Resolver()
export class TodoResolver {
  private todos: Todo[];

  constructor() {
    this.todos = [
      {
        content: 'First'
      }
    ];
  }

  @Query(() => [Todo])
  public toods() {
    return this.todos;
  }

  @Mutation(() => Todo)
  public createTodo(@Arg('todo') todo: TodoArgs) {
    const { content } = todo;

    this.todos.push(todo);
    return { content };
  }

  @Mutation(() => Todo)
  public updateTodo(@Arg('todo') todo: TodoArgs) {
    return this.todos[0];
  }

  @Mutation(() => Boolean)
  public deleteTodo(@Arg('postId') postId: string) {
    return true;
  }
}
