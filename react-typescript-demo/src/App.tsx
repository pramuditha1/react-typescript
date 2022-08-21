import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const person = {
    firstname: 'John',
    lastname: 'Smith',
  }
  return (
    <div className="App">
      <Greet name={'Pramuditha'} messageCount={10}/>
      <Person name={person}/>
    </div>
  );
}

export default App;
