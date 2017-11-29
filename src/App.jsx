import React from 'react';
import Scoreboard from './components/scoreboard/scoreboard.jsx';
import Dreidel from './components/dreidel/dreidel';
import Pot from './components/pot/pot';
import Newgame from './components/newgame/newgame.jsx';
import Winner from './components/winner/winner'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.spin = this.spin.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.state = {
      players: [],
      retiredPlayers:[],
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

  resetGame(){
    let currentPlayer = this.state.players.slice();
    let retiredPlayers = this.state.retiredPlayers.slice();
    let combinedPlayers = [...currentPlayer,...retiredPlayers]
    combinedPlayers.forEach(function(element){element.bank=10;})
    
    this.setState({players:combinedPlayers})
    this.setState({newGame:true})
  }

  spin(player,players,retiredPlayers,pot){
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
    players.forEach(function(element,index){if(element.bank <= 0 && players.length > 1 && players.indexOf(element) !== player){retiredPlayers.push(element);players.splice(index,1)}})

    let currentPlayer = this.state.currentPlayer;
    let nextPlayer = currentPlayer+1;
    let lastPlayer = this.state.players.length-1
    if(currentPlayer === lastPlayer){
      this.setState({currentPlayer:0})
    } else{
      this.setState({currentPlayer: nextPlayer})
    }
    this.setState({retiredPlayers:retiredPlayers});    
    this.setState({players:players});
    this.setState({pot:pot});   
  }

  
  render() {
    let winner;
    if(this.state.players.length === 1 && this.state.newGame === false){
      winner=(<Winner newGame={this.state.newGame} resetGame={this.resetGame} winner={this.state.players[0].playerName}/>)
    } 

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
      {newGame}
      {winner}
        <div className="centeredText">
          <h1 className="App">Let's Play Dreidel!</h1>
        </div>

        <div className="gameContainer">
            <div className="leftHand">
              <Pot pot={this.state.pot} />
            </div>

            <div className="centered">
              <Dreidel hebrewLetter={this.state.hebrewLetter}
              hebrewLetters={this.state.hebrewLetters}
              spin={this.spin}
              player={this.state.currentPlayer}
              players={this.state.players}
              retiredPlayers={this.state.retiredPlayers}
              pot={this.state.pot} />
            </div>  
            <div className="rightHand">
              <Scoreboard players={this.state.players} currentPlayer={this.state.currentPlayer}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
