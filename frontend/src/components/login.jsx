// src/components/Login.jsx
import React from 'react';
import '../App.css'; // Importa o App.css
// import loginImage from '../../public/assets/login.jpg'; 

function Login() {
    return (
        <div className="container">
            <div className="image-container">
                <img src="../../public/assets/login.jpg" alt="Imagem de Login" />
            </div>
            <div className="form-container">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Usuário" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                </form>
                <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
            </div>
        </div>
    );
}

export default Login;