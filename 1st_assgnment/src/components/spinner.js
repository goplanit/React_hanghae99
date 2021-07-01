import React from "react";
import styled from "styled-components";
import { ImSpinner } from "react-icons/im";

const Spinner = (props) => {
  return (
    <Outer>
      <ImSpinner style={{ color: "##b3ffff", fontSize: "150px" }} />
    </Outer>
  );
};

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede2ff;
`;

export default Spinner;
