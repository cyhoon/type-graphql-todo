/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo {
  _id: string;
  content: string;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo;
}

export interface CreateTodoVariables {
  todo: NewTodo;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodo
// ====================================================

export interface DeleteTodo_deleteTodo {
  isDelete: boolean;
}

export interface DeleteTodo {
  deleteTodo: DeleteTodo_deleteTodo;
}

export interface DeleteTodoVariables {
  todoId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTodo
// ====================================================

export interface UpdateTodo_updateTodo {
  _id: string;
  content: string;
}

export interface UpdateTodo {
  updateTodo: UpdateTodo_updateTodo;
}

export interface UpdateTodoVariables {
  todo: NextTodo;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Todos
// ====================================================

export interface Todos_toods {
  _id: string;
  content: string;
}

export interface Todos {
  toods: Todos_toods[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TodoDetail
// ====================================================

export interface TodoDetail {
  _id: string;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface NewTodo {
  _id?: string | null;
  content: string;
}

export interface NextTodo {
  _id: string;
  content: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
