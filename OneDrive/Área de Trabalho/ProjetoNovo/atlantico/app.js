const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Olá Mundo! Bem-vindo ao meu servidor express")
})

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});