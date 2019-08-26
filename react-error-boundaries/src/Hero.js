import React, { Component } from 'react';

class Hero extends Component {
  render() {
    if(this.props.name==="Joker") {
      throw new Error("Joker is not a hero")
    }
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Hero;