import { Todo } from './todo.type';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { NewPost } from './todo.input';

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
  public createTodo(@Arg('newPost') newPost: NewPost) {
    const { content } = newPost;

    this.todos.push(newPost);
    return { content };
  }
}
