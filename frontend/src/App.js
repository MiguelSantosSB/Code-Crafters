import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuLateral from './components/MenuLateral';
import Menu from './components/Menu';
import Task from './components/Task';
import Login from './components/login';
import Cadastro from './components/cadastro';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuLateral />
        <div className="main-content">
          <Menu />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Task />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;