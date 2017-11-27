import React from 'react';
import Scoreboard from './components/scoreboard/scoreboard.jsx';
import Dreidel from './components/dreidel/dreidel';
import Pot from './components/pot/pot';
import Newgame from './components/newgame/newgame.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.state = {
      players: [],
      hebrewLetter: 'נ',
      pot: 50,
      newGame: true
    };
  }

  addPlayer(player,color){
    let players = this.state.players.slice();
    players.push({playerName: player,bank:0,color:color})
    this.setState({players: players});
  }

  removePlayer(player){
    let players = this.state.players.slice();
    players = players.filter(function(e) { return e.playerName !== player })
    this.setState({players: players});
  }

  startGame(){
    alert("startgame clicked")
    this.setState({newGame:false})
  }

  
  render() {
    let newGame;
    if(this.state.newGame === true){
      newGame = (<Newgame newGame={this.state.newGame} players={this.state.players}
        addPlayer={this.addPlayer}
        removePlayer={this.removePlayer}
        startGame={this.startGame}
        colors={['pink','purple','red','blue','green','teal']}
        />)} else{
          newGame = null;
        }
    return (
      <div>
        <div className="centeredText">
          <h1 className="App-title">Let's Play Dreidel Now!</h1>
        {newGame}
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
