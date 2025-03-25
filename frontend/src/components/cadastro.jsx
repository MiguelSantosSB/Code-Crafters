import React from 'react';
import './App.css'; // Importa o App.css

// Importe a imagem
import cadastroImage from '../assets/cadastro.jpg '; // Caminho relativo da pasta src/assets

function Cadastro() {
    return (
        <div className="container">
            <div className="image-container">
                <img src={cadastroImage} alt="Imagem de Cadastro" /> {/* Imagem importada */}
            </div>
            <div className="form-container">
                <h2>Cadastro</h2>
                <form>
                    <input type="text" placeholder="Nome" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Cadastrar</button>
                </form>
                <p>Já tem uma conta? <a href="/login">Faça login</a></p>
            </div>
        </div>
    );
}

export default Cadastro;