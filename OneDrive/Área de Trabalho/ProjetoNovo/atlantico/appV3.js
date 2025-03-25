const express = require("express");
const app = express();

const livros = [
    {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'},
    {id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling'}
];

app.get("/livros", (req, res) => {
    res.json(livros);
});

app.get("/livros:id", (req, res) => {
    const livroId = Number(req.params.id);
    const livro = livros.find(l = l.id === livroId);
    if (livro) {
        res.json(livro);
    } else {
        res.status(404).send("Livro não encontrado");
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
});

const verificarAutenticacao = (req, res, next) => {
    const usuarioAutenticado = true;
    if (usuarioAutenticado) {
        next();
    } else {
        res.status(401).send("Acesso negado. Faça login para continuar.")
    }
};