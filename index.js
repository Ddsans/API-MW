const express = require("express")
const app = express()
const port  = process.env.port || 3000

const servicos = require("./src/servicos.json")

app.get ("/servicos", (req,res) => {
  return res.json(servicos)
})

app.listen(port, () => {
  console.log("Servidor está rodando...")
})