import React from 'react';
import '../../App.css';
import './newgame.css';
// import Players from './players';

class Newgame extends React.Component {
  render() {  
  if (this.props.newGame) {
    
    return (
      <div className="popup overlay">
        <p>Enter Player Name: </p>
        <input ref="playerName"/><button onClick={() => this.props.addPlayer(this.refs.playerName.value,this.refs.color.value) }>Add Player</button>
        <p>Select a color:</p>
        <select ref="color">
         {this.props.colors.map(color => <option value={color}>{color}</option>)}

        </select>
        <p>Players:</p>
       <ul>{this.props.players.map((listValue => <li> {listValue.playerName} <button onClick={() => this.props.removePlayer(listValue.playerName)}>Remove Player</button>
       
       </li>))}</ul>
       <p>{this.props.players.length}</p>
        <button style={{"visibility":this.props.players.length<2?"hidden":"visible"}} onClick={()=> this.props.startGame()}>Let us Play!</button>
      </div>
    );
  }
  return null;
}
};

export default Newgame;
