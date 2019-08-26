import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }
  render() {
    return (
      <div>
        { hasError 
          ? 
          <h1 style={{color: 'red'}}> Sorry!! some error occured.</h1>
          : this.props.childern
        } 
      </div>
    );
  }
}

export default ErrorBoundary;