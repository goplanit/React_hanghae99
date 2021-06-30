import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import DicTemplate from "./components/DicTemplate";
import DicList from "./components/DicList";
import DicHead from "./components/DicHead";
import DicAddTemplate from "./components/DicAddTemplate";
import NotFound from "./components/NotFound";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e0f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 30px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>MY DICTIONARY</h1>
      <DicTemplate>
        <DicHead />
        <Switch>
          <Route path="/" exact component={DicList} />
          <Route path="/add" component={DicAddTemplate} />
          <Route component={NotFound} />
        </Switch>
      </DicTemplate>
    </>
  );
}

export default withRouter(App);
