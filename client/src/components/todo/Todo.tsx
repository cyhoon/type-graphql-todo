import * as React from "react";
import styled from "styled-components";
import { TodoDetail } from "../../graphqls/schema";
import TodoDeleteContainer from "../../container/TodoDeleteContainer";

interface Props {
  todo: TodoDetail;
}

const Todo: React.SFC<Props> = ({ todo }) => {
  const { content } = todo;

  return (
    <Container>
      <span className="content">{content}</span>
      <div className="options">
        <div className="option-wrap">수정</div>
        <span className="line">|</span>
        <div className="option-wrap">
          <TodoDeleteContainer todoId={todo._id} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 40px;
  border: 1px solid #222;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 8px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  .content {
  }

  .options {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 12px;
    font-weight: lighter;

    .option-wrap {
      cursor: pointer;
    }

    .line {
      margin: 0 5px;
    }
  }
`;

export default Todo;
