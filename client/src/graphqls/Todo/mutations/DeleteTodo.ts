import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { DeleteTodo, DeleteTodoVariables } from "src/graphqls/schema";

export const DELETE_TODO = gql`
  mutation DeleteTodo($todoId: String!) {
    deleteTodo(todoId: $todoId) {
      isDelete
    }
  }
`;

export class DeleteTodoMutation extends Mutation<
  DeleteTodo,
  DeleteTodoVariables
> {}
