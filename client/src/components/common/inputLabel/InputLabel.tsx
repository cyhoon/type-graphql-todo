import * as React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

const InputLabel: React.SFC<Props> = ({ value, handleChange, handleClick }) => {
  return (
    <Wrap>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>등록</button>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  input[type="text"] {
    width: 80%;
    outline: none;
    padding-left: 6px;
    border: 1px solid #212121;
    font-size: 14px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button {
    width: 20%;
    background-color: #212121;
    border: none;
    color: white;
    font-size: 14px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    outline: none;
    cursor: pointer;
  }
`;

export default InputLabel;
