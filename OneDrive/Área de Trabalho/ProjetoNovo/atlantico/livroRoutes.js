const express = require("express");
const router = express.Router();
const LivroController = require("../controllers/livros");

router.get("/", LivroController.getLivros);
router.get("/:id", LivroController.getLivroById); // Corrigido
router.post("/", LivroController.createLivro);
router.put("/:id", LivroController.updateLivro); // Corrigido
router.delete("/:id", LivroController.deleteLivro);

module.exports = router;
