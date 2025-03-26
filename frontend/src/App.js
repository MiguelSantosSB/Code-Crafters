import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuLateral from './components/MenuLateral';
import Menu from './components/Menu';
import Task from './components/Task';
import Login from './components/login';
import Logout from './components/Logout';
import Cadastro from './components/cadastro';
import Profile from './components/Profile';
import Feedback from './components/Feedback';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;