import gql from "graphql-tag";

export const TodoDetailFragment = gql`
  fragment TodoDetail on Todo {
    _id
    content
  }
`;
