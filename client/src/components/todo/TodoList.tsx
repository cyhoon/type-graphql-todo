import * as React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  public render() {
    return (
      <div>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    );
  }
}

export default TodoList;
