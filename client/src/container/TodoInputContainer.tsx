import * as React from "react";
import { useState } from "react";
import {
  CreateTodoMutation,
  CREATE_TODO
} from "../graphqls/Todo/mutations/CreateTodo";
import InputLabel from "../components/common/inputLabel";
import { MutationFn, MutationUpdaterFn, FetchResult } from "react-apollo";
import {
  CreateTodo,
  CreateTodoVariables,
  Todos,
  TodosVariables
} from "../graphqls/schema";
import { DataProxy } from "apollo-cache";
import { TODOS } from "../graphqls/Todo/queries/todos";

const TodoInputContainer = () => {
  const [content, setContent] = useState("");

  const handleChangeContent = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;

    setContent(value);
  };

  const mutateCreateTodo = async (
    mutate: MutationFn<CreateTodo, CreateTodoVariables>
  ) => {
    const variables = {
      todo: {
        content
      }
    };

    await mutate({ variables });
  };

  const handleClickCreateButton = (
    mutate: MutationFn<CreateTodo, CreateTodoVariables>
  ) => async () => {
    try {
      await mutateCreateTodo(mutate);
      setContent("");
    } catch (error) {
      alert("등록 실패!");
    }
  };

  const updateCacheTodos: MutationUpdaterFn<CreateTodo> = (
    cache: DataProxy,
    { data }: FetchResult<CreateTodo, Record<string, any>>
  ) => {
    if (!data || !data.createTodo) {
      return;
    }

    const { createTodo } = data;

    const todosCache = cache.readQuery<Todos, TodosVariables>({
      query: TODOS,
      variables: {
        limit: 10,
        offset: 0
      }
    });

    todosCache.todos.unshift(createTodo);

    cache.writeQuery({
      query: TODOS,
      variables: {
        limit: 10,
        offset: 0
      },
      data: todosCache
    });
  };

  return (
    <CreateTodoMutation mutation={CREATE_TODO} update={updateCacheTodos}>
      {mutate => {
        return (
          <InputLabel
            value={content}
            handleChange={handleChangeContent}
            handleClick={handleClickCreateButton(mutate)}
          />
        );
      }}
    </CreateTodoMutation>
  );
};

export default TodoInputContainer;
