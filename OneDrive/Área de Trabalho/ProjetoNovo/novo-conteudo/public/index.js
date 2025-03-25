import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/App'; // Certifique-se de que o caminho está correto
import './index.css'; // Se necessário, para o estilo global

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);