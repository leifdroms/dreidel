import React, { Component } from 'react';
import Scoreboard from './components/scoreboard/scoreboard';
import Dreidel from './components/dreidel/dreidel';
import './App.css';

class App extends Component {
  render() {
    let hebrewLetter = "נ";
    return (
    <div className="centered">
    <div>
    <h1 className="App-title">Let's Play Dreidel!</h1>
    <Scoreboard/>
    </div>
      <Dreidel hebrewLetter={hebrewLetter}/>
    </div>
    );
  }
}

export default App;
