import gql from "graphql-tag";
import { Query } from "react-apollo";
import { TodoDetailFragment } from "../fragments";
import { Todos } from "../../schema";

export const TODOS = gql`
  ${TodoDetailFragment}
  query Todos {
    todos {
      ...TodoDetail
    }
  }
`;

export class TodoListQuery extends Query<Todos, {}> {}
