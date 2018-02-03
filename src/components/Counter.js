import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  propTypes: {
    score: PropTypes.number.isRequired
  }
  
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}



export default Counter;