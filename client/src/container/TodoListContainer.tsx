import * as React from "react";
import { TODOS, TodoListQuery } from "../graphqls/Todo/queries/todos";
import { TodoList } from "../components/todo";

const TodoListContainer = () => {
  return (
    <TodoListQuery query={TODOS}>
      {({ data, loading, error }) => {
        if (error) {
          return null;
        }

        if (loading) {
          return <h3>LOADING</h3>;
        }

        return <TodoList todos={data.toods} />;
      }}
    </TodoListQuery>
  );
};

export default TodoListContainer;
