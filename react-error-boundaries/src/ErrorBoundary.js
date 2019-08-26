import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error:''
  }
  componentDidCatch(error, info) {
    console.log("errro>>>>",error)
    if(error) {
      console.log("here")
      this.setState({ hasError: true, error })
    }
  }
  render() {
    return (
      <div>
        { this.state.hasError 
          ? 
          <h1 style={{color: 'red'}}> Sorry!! Some error occured</h1>
          : this.props.children
        } 
      </div>
    );
  }
}

export default ErrorBoundary;