import React from 'react';
import './App.css';
import SearchDogs from './searchDogs';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Dog Photo Search</h1>
        <SearchDogs />
      </div>
    </div>
  );
}

export default App;
