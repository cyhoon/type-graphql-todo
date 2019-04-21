import * as React from "react";
import {
  DeleteTodoMutation,
  DELETE_TODO
} from "../graphqls/Todo/mutations/DeleteTodo";
import {
  MutationFn,
  Mutation,
  MutationUpdaterFn,
  FetchResult
} from "react-apollo";
import { DeleteTodo, DeleteTodoVariables, Todos } from "src/graphqls/schema";
import styled from "styled-components";
import { DataProxy } from "apollo-cache";
import { TODOS } from "../graphqls/Todo/queries/todos";

interface Props {
  todoId: string;
}

const TodoDeleteContainer: React.SFC<Props> = ({ todoId }) => {
  const mutateDeleteTodo = async (
    mutate: MutationFn<DeleteTodo, DeleteTodoVariables>
  ) => {
    const variables = {
      todoId
    };

    await mutate({ variables });
  };

  const handleClickDeleteButton = (
    mutate: MutationFn<DeleteTodo, DeleteTodoVariables>
  ) => async () => {
    try {
      await mutateDeleteTodo(mutate);
    } catch (error) {
      alert("삭제 실패");
    }
  };

  const updateCacheTodos: MutationUpdaterFn<DeleteTodo> = (
    cache: DataProxy,
    { data }: FetchResult<DeleteTodo, Record<string, any>>
  ) => {
    if (!data || !data.deleteTodo) {
      return;
    }

    const {
      deleteTodo: { isDelete }
    } = data;

    if (!isDelete) {
      alert("삭제에 실패했습니다");
      return;
    }

    const todosCache = cache.readQuery<Todos>({ query: TODOS });
    const nextTodos = todosCache.toods.filter(todo => todo._id !== todoId);

    todosCache.toods = nextTodos;

    cache.writeQuery({
      query: TODOS,
      data: todosCache
    });
  };

  return (
    <DeleteTodoMutation mutation={DELETE_TODO} update={updateCacheTodos}>
      {mutate => {
        return (
          <RemoveButton onClick={handleClickDeleteButton(mutate)}>
            삭제
          </RemoveButton>
        );
      }}
    </DeleteTodoMutation>
  );
};

export default TodoDeleteContainer;

const RemoveButton = styled.button`
  border: none;
  background-color: #f44336;
  padding: 3px 5px;
  color: white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;
