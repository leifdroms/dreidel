import React from 'react';
import '../../App.css';
import './newgame.css';
// import Players from './players';

class Newgame extends React.Component {
  render() {  
  if (this.props.newGame) {
    
    return (
      <div>
      <div className="blackOverlay">
      </div>
      <div className="whiteContent">
        <p>Enter Player Name: </p>
        <input ref="playerName"/><button onClick={() => this.props.addPlayer(this.refs.playerName.value,this.refs.color.value) }>Add Player</button>
        <p>Select a color:</p>
        <select ref="color">
         {this.props.colors.map(color => <option value={color}>{color}</option>)}

        </select>
        <p>Players:</p>
       <ul className="playerList">{this.props.players.map((listValue => <li style={{"background-color": listValue.color}}> {listValue.playerName} <button onClick={() => this.props.removePlayer(listValue.playerName)}>Remove Player</button>
       
       </li>))}</ul>
        <button style={{"visibility":this.props.players.length<2?"hidden":"visible"}} onClick={()=> this.props.startGame()}>Let us Play!</button>
      </div>
      </div>
    );
  }
  return null;
}
};

export default Newgame;
