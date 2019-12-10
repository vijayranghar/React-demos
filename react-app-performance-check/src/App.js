import React, { useState } from 'react';
import logo from './logo.svg';
import Child from './components/child'

import './App.css';

const message = () => console.log("hello world")
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Subtract</button>
        
        {/* Wrong function inside callback will be always new hence Child will be always re-rendered */}

        {/* <Child callback={() => console.log("From parent")}/> */}

        {/* Correct way --> Store function inside a variable and then pass that variable */}
        <Child callback={message}/>
      </header>
    </div>
  );
}

export default App;
