import * as React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <span className="logo">Todo</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .logo {
    font-size: 24px;
    font-weight: 800;
    color: #212121;
  }
`;

export default Header;
