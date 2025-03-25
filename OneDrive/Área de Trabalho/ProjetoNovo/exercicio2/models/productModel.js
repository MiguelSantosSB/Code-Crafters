const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let produtos = [];

// GET /produtos - Listar todos os produtos
app.get('/produtos', (req, res) => {
    if (!produtos || produtos.length === 0) {
        res.status(500).json({ message: "Erro na coleta de dados." });
    } else {
        res.status(200).json(produtos);
    }
});

// GET /produtos/:id - Apresentar o produto pelo id
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produto = produtos.find((prod) => prod.id === id);
    if (!produto) {
        res.status(404).json({ message: "Produto não encontrado." });
    } else {
        res.status(200).json(produto);
    }
});

// POST /produtos - Criar um novo produto
app.post('/produtos', (req, res) => {
    const { nome, preco, descricao } = req.body;

    if (!nome || !preco || !descricao) {
        res.status(400).json({ message: "Todos os campos são obrigatórios." });
    } else {
        const novoProduto = {
            id: produtos.length + 1,
            nome,
            preco,
            descricao
        };
        produtos.push(novoProduto);
        res.status(201).json({ message: "Produto criado com sucesso!", produto: novoProduto });
    }
});

// PUT /produtos/:id - Atualizar um produto pelo ID
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco, descricao } = req.body;
    let produto = produtos.find((prod) => prod.id === id);

    if (!produto) {
        res.status(404).json({ message: "Produto não encontrado." });
    } else {
        produto.nome = nome || produto.nome;
        produto.preco = preco || produto.preco;
        produto.descricao = descricao || produto.descricao;
        res.status(200).json({ message: "Produto atualizado com sucesso!", produto });
    }
});

// DELETE /produtos/:id - Remover um produto pelo ID
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((prod) => prod.id === id);

    if (index === -1) {
        res.status(404).json({ message: "Produto não encontrado." });
    } else {
        produtos.splice(index, 1);
        res.status(200).json({ message: "Produto removido com sucesso!" });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});