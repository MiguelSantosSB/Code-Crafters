const express = require("express");  
const taskRouter = require("./routes/taskRouter");
const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use("/tasks", taskRouter);

// Rota inicial
app.get("/", (req, res) => {
    res.json({massage: "rotaprincipal"})
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});