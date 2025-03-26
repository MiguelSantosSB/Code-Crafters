import React from 'react';
 import './App.css'; 
 
 function Login() {
     return (
         <div className="container">
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