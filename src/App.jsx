import React from 'react';
import Scoreboard from './components/scoreboard/scoreboard.jsx';
import Dreidel from './components/dreidel/dreidel';
import Pot from './components/pot/pot';
import './App.css';

const App = () => {
  const hebrewLetter = 'נ';
  const players = [{"playerName":"jim folf","bank":0,"color":"red"},{"playerName":"sally","bank":0,"color":"blue"},{"playerName":"rat face","bank":1,"color":"pink"}]    
  const pot = 50;
  return (
    <div>
      <div className="centeredText">
        <h1 className="App-title">Let's Play Dreidel!</h1>
      </div>
      <div className="centered">
      <Dreidel className="centered" hebrewLetter={hebrewLetter} />
      <div className="rightHand">
      <Scoreboard players={players} />
      </div>
      <div>
      <Pot className="leftHand" pot={pot} />
        </div>
      </div>
    </div>
  );
};

export default App;
