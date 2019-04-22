import * as React from "react";
import * as InfiniteScroll from "react-infinite-scroll-component";
import Todo from "./Todo";
import { TodoDetail } from "../../graphqls/schema";

interface Props {
  todos: TodoDetail[];
  onNext: () => void;
}

class TodoList extends React.Component<Props> {
  public render() {
    const { todos } = this.props;

    return (
      <div>
        <InfiniteScroll
          dataLength={this.props.todos.length}
          next={this.props.onNext}
          hasMore
          loader={null}
        >
          {todos.map((todo, index) => {
            const { _id } = todo;
            return <Todo key={`${index}-${_id}`} todo={todo} />;
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default TodoList;
