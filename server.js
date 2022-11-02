const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);


// CRUD --> Create, Read, Update, Delete

// Retorna uma Refeição
server.get('/servicos/:index', (req, res) => {
    const { index } = req.params

    return res.json(data.servicos[index])
});

// Retornar todas as refeições
server.get('/servicos', (req, res) => {

    return res.json(data.servicos)
});

// Criar uma nova 
server.post('/servicos', (req, res) => {
    const { name } = req.body;
    data.servicos.push(name);

    return res.json(data.servicos);
});

// Atualizar um curso
server.put('/servicos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    data.servicos[index] = name;

    return res.json(data.servicos);
});

// Deletar um curso
server.delete('/servicos/:index', (req, res) => {
    const { index } = req.params;

    data.splice(index, 1);
    return res.json({ message: "O curso foi deletado" });
})


server.delete("/servicos/:index", (req, res) => {
    const item = item.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Comida não foi apagada com sucesso!"
        });
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});



server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});