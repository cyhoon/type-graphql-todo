import gql from "graphql-tag";
import { TodoDetailFragment } from "../fragments";
import { Mutation } from "react-apollo";
import { UpdateTodo, UpdateTodoVariables } from "src/graphqls/schema";

export const UPDATE_TODO = gql`
  ${TodoDetailFragment}
  mutation UpdateTodo($todo: NextTodo!) {
    updateTodo(todo: $todo) {
      ...TodoDetail
    }
  }
`;

export class UpdateTodoMutation extends Mutation<
  UpdateTodo,
  UpdateTodoVariables
> {}
