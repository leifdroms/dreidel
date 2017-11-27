import React from 'react';
import './scoreboard.css';

const Scoreboard = (props) => {  
  return (
    <div className="scoreboardContainer">   
      <h1>Players</h1>
      {props.players.map(function(listValue,index){
      return <ul className={"playerList " + (props.currentPlayer === index?"currentPlayer":"")} style={{"background-color": listValue.color}}>
                    <li>{listValue.playerName}</li>
                    <li>Bank: {listValue.bank}</li>
                    </ul>
            })}
      </div>
    );
}

export default Scoreboard;
