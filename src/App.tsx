import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import { IMobxStore } from "./stores/mobxStore";

interface AppProps {
  mobxStore?: IMobxStore;
}

@inject("mobxStore")
@observer
class App extends Component<AppProps> {
  render() {
    const { greeting } = this.props.mobxStore!;

    return (
      <div className="App">
        <header className="App-header">
          {greeting}
          <button onClick={this.clickHandler} value="Bob">
            Change Greeting
          </button>
          <button onClick={this.clickHandler} value="World">
            Reset
          </button>
        </header>
      </div>
    );
  }

  private clickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const { setName } = this.props.mobxStore!;
    setName(e.currentTarget.value);
  };
}

export default App;
