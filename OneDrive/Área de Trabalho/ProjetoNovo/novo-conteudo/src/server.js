// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Servir os arquivos estáticos da pasta 'build' após o React ser construído
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});