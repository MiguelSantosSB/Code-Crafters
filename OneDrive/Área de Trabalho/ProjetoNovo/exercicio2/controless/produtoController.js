let produtos = [];

exports.CriarProduto = (req, res) => {
    const {nome, preco, descricao} = req.body;
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        descricao,
    };
    produtos.push(novoProduto);
    res.status(201).json({message: "Produto criado com sucesso!", produto: novoProduto})
};

exports.listarProdutos = (req, res) => {
    res.status(200).json(produtos);
};

exports.buscarProdutoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(prod => prod.id === id);
    if (!produto) {
        return res.status(404).json({massage: "Produto não encontrado"});
    }
    res.status(200).json(produto);
}

exports.atualizarProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco, descricao } = req.body;
    let produto = produtos.find(prod => prod.id === id);
    if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado." });
    }
    produto.nome = nome || produto.nome;
    produto.preco = preco || produto.preco;
    produto.descricao = descricao || produto.descricao;
    res.status(200).json({ message: "Produto atualizado com sucesso!", produto });
};

// Remover um produto pelo ID
exports.removerProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(prod => prod.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Produto não encontrado." });
    }
    produtos.splice(index, 1);
    res.status(200).json({ message: "Produto removido com sucesso!" });
};

