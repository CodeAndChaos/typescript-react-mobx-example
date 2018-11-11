import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import { IMobxStore } from './stores/mobxStore';

interface AppProps {
  mobxStore?: IMobxStore
}

@inject('mobxStore')
@observer
class App extends Component<AppProps> {
  render() {
    const {greeting} = this.props.mobxStore!;
    
    return (
      <div className="App">
        <header className="App-header">
            {greeting}
          <button onClick={this.clickHandler}>Change Greeting</button>
        </header>
        
      </div>
    );
  }

  private clickHandler = () =>{
    const {setName} = this.props.mobxStore!;
    setName("Bob");
  }
}

export default App;
