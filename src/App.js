import React, { Component } from 'react';
import dreidel from './dreidel.svg';
import Scoreboard from './components/scoreboard/scoreboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Scoreboard/>
          <h1 className="App-title">Let's Play Dreidel!</h1>
          <img src={dreidel} className="dreidel" alt="dreidel"/>
      </div>
    );
  }
}

export default App;
