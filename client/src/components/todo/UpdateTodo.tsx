import * as React from "react";
import styled from "styled-components";

interface Props {
  content: string;
  handleChangeContent: (event: React.FormEvent<HTMLInputElement>) => void;
  onChangeCancel: () => void;
  onChangeOk: () => void;
}

const UpdateTodo: React.SFC<Props> = ({
  content,
  handleChangeContent,
  onChangeCancel,
  onChangeOk
}) => {
  return (
    <Container>
      <Input
        type="text"
        className="content"
        value={content}
        onChange={handleChangeContent}
      />
      <div className="options">
        <div className="option-wrap">
          <button className="cancel-button" onClick={onChangeCancel}>
            취소
          </button>
        </div>
        <span className="line">|</span>
        <div className="option-wrap">
          <button className="ok-button" onClick={onChangeOk}>
            완료
          </button>
        </div>
      </div>
    </Container>
  );
};

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 17px;
`;

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

      .cancel-button {
        border: none;
        background-color: #ffd600;
        padding: 3px 5px;
        color: white;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
      }

      .ok-button {
        border: none;
        background-color: #1e88e5;
        padding: 3px 5px;
        color: white;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
      }
    }

    .line {
      margin: 0 5px;
    }
  }
`;

export default UpdateTodo;
