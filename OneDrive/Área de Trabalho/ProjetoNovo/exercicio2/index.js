const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');

app.use(express.json()); // Permitir JSON no body das requisições
app.use(produtoRoutes); // Importa as rotas

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 🚀");
});