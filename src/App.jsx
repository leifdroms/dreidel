import React from 'react';
import Scoreboard from './components/scoreboard/scoreboard.jsx';
import Dreidel from './components/dreidel/dreidel';
import Pot from './components/pot/pot';
import Newgame from './components/newgame/newgame.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{ playerName: 'jim roflcopter', bank: 0, color: 'pink' }],
      hebrewLetter: 'נ',
      pot: 50,
      newGame: true,
    };
  }
  render() {
    return (
      <div>

        <div className="centeredText">
          <h1 className="App-title">Let's Play Dreidel Now!</h1>
          <Newgame newGame={this.state.newGame} players={this.state.players}/>
        </div>
        <div className="centered">
          <Dreidel className="centered" hebrewLetter={this.state.hebrewLetter} />
          <div className="rightHand">
            <Scoreboard players={this.state.players} />
          </div>
          <div>
            <Pot className="leftHand" pot={this.state.pot} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
