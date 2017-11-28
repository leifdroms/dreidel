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
    this.spin = this.spin.bind(this);
    this.state = {
      players: [],
      hebrewLetters: ['נ','ג','ה','שׁ'],
      hebrewLetter: '',
      pot: 0,
      newGame: true,
      currentPlayer:0
    };
  }

  addPlayer(player,color){
    let players = this.state.players.slice();
    players.push({playerName: player,bank:10,color:color})
    this.setState({players: players});
  }

  removePlayer(player){
    let players = this.state.players.slice();
    players = players.filter(function(e) { return e.playerName !== player })
    this.setState({players: players});
  }

  startGame(){
    this.setState({newGame:false})
  }

  spin(player,players,pot){
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    // ante up! take 1 coin from each player
    let pool = 0;
    players.forEach(function(element) {
      if(element.bank > 0){element.bank--;pool++}else {
        alert(`oh no! ${element.playerName} is out of the game!`)        
      };
      
  });
  pot = pot + pool;

    function nun(player){
      //do nothing
    }
    function gimel(player){
      //get all from pot
      players[player].bank = players[player].bank + pot
      pot = 0;
    }
    function hey(player){
      players[player].bank = players[player].bank+ Math.ceil(pot / 2)
      pot = Math.floor(pot/2)
    }
    function shin(player){
      players[player].bank--;    
      pot = pot + 1
    }

    let hashMap= {
      'נ':nun,
      'ג':gimel,
      'ה':hey,
      'שׁ':shin,
    }


    let letterIndex = getRandomInt(0,4);
    let currentLetter = this.state.hebrewLetters[letterIndex]
    this.setState({hebrewLetter:currentLetter})
    hashMap[currentLetter](player) 
    players.forEach(function(element,index){if(element.bank <= 0 && players.length > 1 && players.indexOf(element) !== player){players.splice(index,1)}})

    if(this.state.currentPlayer === this.state.players.length-1){
      this.setState({currentPlayer:0})
    } else{
      this.setState({currentPlayer: this.state.currentPlayer+1})
    }
    this.setState({players:players});
    this.setState({pot:pot});
    if(players.length === 1){alert(`Congrats! ${players[0].playerName} is the winner!`)}    
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
          <Dreidel className="centered" hebrewLetter={this.state.hebrewLetter}
          hebrewLetters={this.state.hebrewLetters}
          spin={this.spin}
          player={this.state.currentPlayer}
          players={this.state.players}
          pot={this.state.pot} />
          <div className="rightHand">
            <Scoreboard players={this.state.players} currentPlayer={this.state.currentPlayer}/>
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
