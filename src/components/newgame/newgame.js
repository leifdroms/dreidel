import React, { Component } from 'react';
import '../../App.css';
import './newgame.css';
import Players from './players';

class Newgame extends Component {
  render() {
    if(this.props.newGame){
    return (
    <div>
     <h1>Newgame</h1>
     <button>Let's Play!</button>  
     </div>
    );
  }
  else {
    return null
  }
}
}

export default Newgame;
