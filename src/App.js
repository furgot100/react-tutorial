import React from 'react';
import logo from './logo.svg';
import './App.css';

// NEW
import Title from './Title';


function App() {
  return (
    <div className="App">
      <Title />
      <img src={logo} />
    </div>
  );
}

export default App;


