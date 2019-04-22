import * as React from "react";
import { useState } from "react";
import { TODOS, TodoListQuery } from "../graphqls/Todo/queries/todos";
import { TodoList } from "../components/todo";
import { FetchMoreQueryOptions } from "apollo-boost";
import { Todos, TodosVariables } from "src/graphqls/schema";

const TODO_LIST_LIMIT = 10;
const TODO_LIST_OFFSET = 0;

const TodoListContainer = () => {
  const [todoListOffset, setTodoListOffset] = useState(TODO_LIST_OFFSET);

  const handleFetchMore = fetchMore => () => {
    const newTodoListOffset = todoListOffset + TODO_LIST_LIMIT;

    fetchMore({
      variables: {
        limit: TODO_LIST_LIMIT,
        offset: newTodoListOffset
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const nextTodosCache = prev;

        if (!fetchMoreResult || fetchMoreResult.todos.length === 0) {
          return prev;
        }

        nextTodosCache.todos = nextTodosCache.todos.concat(
          fetchMoreResult.todos
        );

        setTodoListOffset(newTodoListOffset);

        return nextTodosCache;
      }
    });
  };

  return (
    <TodoListQuery
      query={TODOS}
      variables={{ limit: TODO_LIST_LIMIT, offset: 0 }}
    >
      {({ data, loading, error, fetchMore }) => {
        if (error) {
          return null;
        }

        if (loading) {
          return <h3>LOADING</h3>;
        }

        return (
          <TodoList todos={data.todos} onNext={handleFetchMore(fetchMore)} />
        );
      }}
    </TodoListQuery>
  );
};

export default TodoListContainer;
