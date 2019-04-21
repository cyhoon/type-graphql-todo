import * as React from "react";
import { TodoDetail } from "../../graphqls/schema";
import TodoUpdateContainer from "../../container/TodoUpdateContainer";
import ViewTodo from "./ViewTodo";

interface Props {
  todo: TodoDetail;
}

const Todo: React.SFC<Props> = ({ todo }) => {
  const [isTodoUpdating, setTodoUpdate] = React.useState(false);

  const handleChangeTodoUpdate = () => {
    setTodoUpdate(!isTodoUpdating);
  };

  return isTodoUpdating ? (
    <TodoUpdateContainer
      todo={todo}
      onChangeTodoUpdate={handleChangeTodoUpdate}
    />
  ) : (
    <ViewTodo todo={todo} onChangeTodoUpdate={handleChangeTodoUpdate} />
  );
};

export default Todo;
