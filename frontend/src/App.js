import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <div className="main-content"> {/* Adicione uma classe para o conteúdo principal */}
          <Menu />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/" exact>
              <Task />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

