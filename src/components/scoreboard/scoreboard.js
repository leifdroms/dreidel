import React, { Component } from 'react';
import './scoreboard.css';

class Scoreboard extends Component {
  render() {
    return (
      <div>   

            {this.props.players.map(function(listValue){
                return <ul style={{"background-color": listValue.color}}>
                    <li>{listValue.playerName}</li>
                    <li>Bank: {listValue.bank}</li>
                    </ul>
            })}
      </div>
    );
  }
}

export default Scoreboard;
