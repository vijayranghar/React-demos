import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }
  componentDidCatch(error, info) {
    if(error) {
      this.setState({ error: true })
    }
  }
  render() {
    return (
      <div>
        { this.state.hasError 
          ? 
          <h1 style={{color: 'red'}}> Sorry!! some error occured.</h1>
          : this.props.children
        } 
      </div>
    );
  }
}

export default ErrorBoundary;