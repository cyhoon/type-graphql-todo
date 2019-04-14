import * as React from "react";
import styled from "styled-components";
import Header from "../common/header/Header";
import InputLabel from "../common/inputLabel";
import { TodoList } from "../todo";

const HomePage: React.SFC<{}> = () => {
  return (
    <Container>
      <div className="header-wrap">
        <Header />
      </div>
      <div className="content">
        <div className="todo-input-wrap">
          <InputLabel />
        </div>
        <div className="todo-list-wrap">
          <TodoList />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  margin: 0 auto;

  padding-top: 30px;

  .header-wrap {
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
  }

  .content {
    .todo-input-wrap {
      height: 40px;
      margin-bottom: 30px;
    }

    .todo-list-wrap {
    }
  }
`;

export default HomePage;
