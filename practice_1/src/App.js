// import "./App.css";
import React from "react";
import Start from "./start";
import "./scss_ex.scss";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "르탄이",
    };
  }

  render() {
    return (
      <div className="App">
        <Start name={this.state.name} />
      </div>
    );
  }
}

export default App;
