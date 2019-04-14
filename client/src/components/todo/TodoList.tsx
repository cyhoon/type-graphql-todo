import * as React from "react";
import Todo from "./Todo";
import { TodoDetail } from "../../graphqls/schema";

interface Props {
  todos: TodoDetail[];
}

class TodoList extends React.Component<Props> {
  public render() {
    const { todos } = this.props;

    return (
      <div>
        {todos.map(todo => {
          const { _id } = todo;
          return <Todo key={_id} todo={todo} />;
        })}
      </div>
    );
  }
}

export default TodoList;
