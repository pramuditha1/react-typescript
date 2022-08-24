import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status} from './components/Status';

function App() {
  const person = {
    firstname: 'John',
    lastname: 'Smith',
  }

  const personArr = [
    {
      firstname: 'John',
      age: 30
    },
    {
      firstname: 'Smith',
      age: 40
    },
    {
      firstname: 'Ketty',
      age: 38
    }
  ]
  return (
    <div className="App">
      {/* Typescript types sring and integer */}
      <Greet name={'Pramuditha'} messageCount={10}/>

      {/* Typescript object example */}
      <Person name={person}/>

      {/* Typescript array example */}
      <PersonList persons={personArr} />

      {/* Advanced props */}
      {/* You can pass only loading, logged or login failed Status */}
      <Status status={'loading'} />
    </div>
  );
}

export default App;
