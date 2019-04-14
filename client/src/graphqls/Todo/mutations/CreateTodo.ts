import gql from "graphql-tag";
import { TodoDetailFragment } from "../fragments";
import { Mutation } from "react-apollo";
import { CreateTodo, CreateTodoVariables } from "../../schema";

export const CREATE_TODO = gql`
  ${TodoDetailFragment}
  mutation CreateTodo($todo: NewTodo!) {
    createTodo(todo: $todo) {
      ...TodoDetail
    }
  }
`;

export class CreateTodoMutation extends Mutation<
  CreateTodo,
  CreateTodoVariables
> {}
