import React, { Component } from 'react';
import './pot.css';

class Pot extends Component {
  render() {
     let pot = []
     let coin = <button className="coin"></button>
     for(let i = 0; i < this.props.pot;i++){
       pot.push(coin)
     }
    return (
    <div className="pot">
    <h1>Pot:</h1>
    {pot}
    </div>
      
    );
  }
}

export default Pot;
