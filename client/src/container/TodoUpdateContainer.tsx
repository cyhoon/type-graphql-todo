import * as React from "react";
import { useState } from "react";
import {
  UpdateTodoMutation,
  UPDATE_TODO
} from "../graphqls/Todo/mutations/UpdateTodo";
import UpdateTodoComponent from "../components/todo/UpdateTodo";
import {
  TodoDetail,
  UpdateTodo,
  UpdateTodoVariables,
  Todos
} from "../graphqls/schema";
import { MutationFn, MutationUpdaterFn, FetchResult } from "react-apollo";
import { DataProxy } from "apollo-cache";
import { TODOS } from "../graphqls/Todo/queries/todos";

interface Props {
  todo: TodoDetail;
  onChangeTodoUpdate: () => void;
}

const TodoUpdateContainer: React.SFC<Props> = ({
  todo,
  onChangeTodoUpdate
}) => {
  const [content, setContent] = useState(todo.content);

  const handleChangeContent = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setContent(value);
  };

  const mutateUpdateTodo = async (
    mutate: MutationFn<UpdateTodo, UpdateTodoVariables>
  ) => {
    const { _id } = todo;

    const variables = {
      todo: {
        _id,
        content
      }
    };

    await mutate({ variables });
  };

  const handleChangeOkButton = (
    mutate: MutationFn<UpdateTodo, UpdateTodoVariables>
  ) => async () => {
    try {
      await mutateUpdateTodo(mutate);
      onChangeTodoUpdate();
    } catch (error) {
      alert("수정 실패");
    }
  };

  const updateCacheTodos: MutationUpdaterFn<UpdateTodo> = (
    cache: DataProxy,
    { data }: FetchResult<UpdateTodo, Record<string, any>>
  ) => {
    if (!data || !data.updateTodo) {
      return;
    }

    const {
      updateTodo: { _id }
    } = data;

    const todosCache = cache.readQuery<Todos>({ query: TODOS });

    const foundTodosIndex = todosCache.todos.findIndex(
      todo => todo._id === _id
    );

    if (foundTodosIndex === -1) {
      alert("수정 실패");
      return;
    }

    todosCache.todos[foundTodosIndex].content = content;

    cache.writeQuery({
      query: TODOS,
      data: todosCache
    });
  };

  return (
    <UpdateTodoMutation mutation={UPDATE_TODO} update={updateCacheTodos}>
      {mutate => {
        return (
          <UpdateTodoComponent
            content={content}
            handleChangeContent={handleChangeContent}
            onChangeCancel={onChangeTodoUpdate}
            onChangeOk={handleChangeOkButton(mutate)}
          />
        );
      }}
    </UpdateTodoMutation>
  );
};

export default TodoUpdateContainer;
