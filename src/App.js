import React, { Component } from 'react';
import Scoreboard from './components/scoreboard/scoreboard';
import Dreidel from './components/dreidel/dreidel';
import Pot from './components/pot/pot';
import './App.css';

class App extends Component {
  render() {
    let hebrewLetter = "נ";
    let players = [{"playerName":"jim folf","bank":0,"color":"red"},{"playerName":"sally","bank":0,"color":"blue"},{"playerName":"rat face","bank":1,"color":"pink"}]    
    let pot = 35;
    return (
    <div className="centered">
    <div>
    <h1 className="App-title">Let's Play Dreidel!</h1>
    <Scoreboard players={players}/>
    <Pot pot={pot}/>
    </div>
      <Dreidel hebrewLetter={hebrewLetter}/>
    </div>
    );
  }
}

export default App;
