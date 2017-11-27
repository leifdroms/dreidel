import React from 'react';
import '../../App.css';
import './newgame.css';
// import Players from './players';

function addPlayer(playerName) {
  function newFunction() {
    alert(`Hello ${playerName}`);
  }
  newFunction();
}

class Newgame extends React.Component {
  render() {  
  if (this.props.newGame) {
    
    return (
      <div className="popup overlay">
        <p>Enter Player Name: </p>
        <input ref="playerName"/><button onClick={() => {addPlayer(this.refs.playerName.value) }}>Add Player</button>
        <p>Players:</p>
       <ul>{this.props.players.map((listValue => <li> {listValue.playerName} </li>))}</ul>
        <button>Let us Play!</button>
      </div>
    );
  }
  return null;
}
};

export default Newgame;
