import React, { useState } from 'react';
import logo from './logo.svg';
import Child from './components/child'

import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Subtract</button>
        <Child />
      </header>
    </div>
  );
}

export default App;
