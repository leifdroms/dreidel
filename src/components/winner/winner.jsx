import React from 'react';
import '../../App.css';
import './winner.css';
// import Players from './players';

class Winner extends React.Component {
  render() {  
    if (!this.props.newGame) {
    return (
      <div>
          <div className="blackOverlay">
          </div>
          <div className="whiteContent">
             <h1>Congrats! {this.props.winner} is the winner!</h1>
            <button onClick={() => this.props.resetGame()}>New Game</button>
          </div>
      </div>
    );
  }
  return null;
};
}

export default Winner;
