import React from 'react';
import MenuLateral from './components/MenuLateral';
import Menu from './components/Menu';
import Task from './components/Task';
import './App.css';

function App() {

  return (
    <div className="App">
      <MenuLateral />
      <div>
        <Menu />
        <Task />
      </div>
    </div>
  );
}

export default App;