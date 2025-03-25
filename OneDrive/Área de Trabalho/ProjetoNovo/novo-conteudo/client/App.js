import React, { useState } from 'react';
import './App.css';
import logo from './assets/images/cadastro.png'; // Importe a imagem aqui

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para simular o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular um envio de dados (você pode adicionar lógica real aqui)
    console.log('Form Submitted', formData);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Cadastro</h1>

        {/* Exibindo a imagem (logo) */}
        <img src={logo} alt="Logo" className="logo" />  {/* Adicionando a logo */}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
            />
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
            />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;