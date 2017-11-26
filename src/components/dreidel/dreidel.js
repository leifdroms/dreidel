import React, { Component } from 'react';
import '../../App.css';
import './dreidel.css';
import dreidel from './dreidel.svg';

class Dreidel extends Component {
  render() {
    return (
    <div>
     <div className="dreidelContainer">
          <img src={dreidel} className="dreidel" alt="dreidel"/>
          <h1 className="hebrew">{this.props.hebrewLetter}</h1>
      </div>
      <button className="spinButton" onClick={()=>{alert("Dreidel has been clicked")}}>Spin!</button>
      </div>
      
    );
  }
}

export default Dreidel;
