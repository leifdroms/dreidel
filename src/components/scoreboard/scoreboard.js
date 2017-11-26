import React, { Component } from 'react';
import './scoreboard.css';

class Scoreboard extends Component {
  render() {
      let players = [{"playerName":"jim bob","bank":0,"color":"red"},{"playerName":"sally","bank":0,"color":"blue"},{"playerName":"rat face","bank":1,"color":"pink"}]
    return (
      <div>   

            {players.map(function(listValue){
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
