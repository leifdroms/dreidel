import React, { Component } from 'react';
import '../../App.css';
import './dreidel.css';
import dreidel from './dreidel.svg';

class Dreidel extends Component {
  constructor(props) {
    super(props);
      this.state = {
      hebrewLetters: ['נ','ג','ה','שׁ'],
    };
  }

  render() {
    return (
    <div className="leftHand">
     <div className="dreidelContainer">
          <img src={dreidel} className="dreidel" alt="dreidel"/>
          <h1 className="hebrew">{this.props.hebrewLetter}</h1>
          <button className="spinButton" onClick={()=>{this.props.spin(this.props.player,this.props.players,this.props.pot)}}>Spin!</button>
      </div>
      </div>
      
    );
  }
}

export default Dreidel;
