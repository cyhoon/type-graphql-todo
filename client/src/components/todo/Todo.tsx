import * as React from "react";
import styled from "styled-components";
import { TodoDetail } from "../../graphqls/schema";

interface Props {
  todo: TodoDetail;
}

const Todo: React.SFC<Props> = ({ todo }) => {
  const { content } = todo;

  return (
    <Wrap>
      <span className="content">{content}</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 40px;
  border: 1px solid #222;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 8px 6px;
  display: flex;
  align-items: center;
  background-color: white;

  .content {
  }

  .options {
  }
`;

export default Todo;
