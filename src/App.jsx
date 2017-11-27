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
      hebrewLetter: 'נ',
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

  spin(player){
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    // ante up! take 1 coin from each player
    let players = this.state.players.slice();
    let pool = 0;
    players.forEach(function(element) {
      if(element.bank > 0){element.bank--}else {
        alert(`oh no! ${element.playerName} is out of the game!`)        
      };
      pool++
  });

  this.setState({pot:this.state.pot+pool})
    function nun(player){
      //do nothing
    }
    function gimel(player){
      //get all from pot
      players[player].bank += this.state.pot
      this.setState({pot:0})
    }
    function hey(player){
      players[player].bank += Math.ceil(this.state.pot / 2)
      this.setState({pot:Math.floor(this.state.pot / 2)})
    }
    function shin(player){
      players[player].bank--;    
      this.setState({pot:this.state.pot+1})      
    }

    let hashMap= {
      'נ':nun,
      'ג':gimel,
      'ה':hey,
      'שׁ':shin,
    }


    if(players.length === 1){alert(`Congrats! ${players[0].playerName} is the winner!`)}
    let letterIndex = getRandomInt(0,4);
    this.setState({hebrewLetter:this.state.hebrewLetters[letterIndex]})
    hashMap[this.state.hebrewLetter](player)
    
    players.forEach(function(element,index){if(element.bank === 0 && players.length > 1){players.splice(index,1)}})
    this.setState({players:players})

    if(this.state.currentPlayer === this.state.players.length-1){
      this.setState({currentPlayer:0})
      alert("the next player is: " + this.state.players[0].playerName)      
    } else{
      this.setState({currentPlayer: this.state.currentPlayer+1})
      alert("the next player is: " + this.state.players[this.state.currentPlayer+1].playerName)          
    }
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
          player={this.state.currentPlayer} />
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
