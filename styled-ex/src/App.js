import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MyStyled bgColor={"red"}>안녕하세요</MyStyled>
    </div>
  );
}

const MyStyled = styled.div`
  width: 50vw;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: blue;
  &:hover {
    background-color: #ddd;
  }
  background-color: ${(props) => (props.bgColor ? "red" : "purple")};
`;

export default App;
