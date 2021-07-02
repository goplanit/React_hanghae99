import "./App.css";
import React from "react";

// route
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

// component
import PostList from "../pages/PostList";
import Header from "./Header";
import { Grid } from "../elements/Index";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
