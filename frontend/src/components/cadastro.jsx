// src/components/Cadastro.jsx
import React from 'react';
import './App.css'; // Importa o App.css

function Cadastro() {
    return (
        <div className="container">
            <div className="image-container">
                <img src="/projeto-new/Code-Crafters/frontend/public/assets/cadastro.jpg" alt="Imagem do cadastro" />
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