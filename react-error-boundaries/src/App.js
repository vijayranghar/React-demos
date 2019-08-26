import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero name="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="Joker" />
        </ErrorBoundary>
      </div>
    )
  }
}
export default App;
