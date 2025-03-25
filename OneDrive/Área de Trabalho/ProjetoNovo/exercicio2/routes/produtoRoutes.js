const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Definição das rotas usando o controller
router.post('/produtos', produtoController.criarProduto);
router.get('/produtos', produtoController.listarProdutos);
router.get('/produtos/:id', produtoController.buscarProdutoPorId);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.delete('/produtos/:id', produtoController.removerProduto);

module.exports = router;