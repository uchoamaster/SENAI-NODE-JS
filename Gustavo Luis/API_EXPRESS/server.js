import express from "express";
import "dotenv/config";
import { buscaUfsPorNome, buscaPorId, buscaPorTodos, atualizaCidade } from "./src/services/services.js"

const app = express();
app.use(express.json())
const port = process.env.PORT;


app.use(express.urlencoded({ extended: true }))



app.get("/cidades/all", (req, res) => {
    const allCitys = buscaPorTodos();
    res.status(200).json(allCitys);
});

app.get("/cidades/:id", (req, res) => {
    const idUF = req.params.id
    let escolhida;
    let msgaErro = "";
    if (!(isNaN(idUF))) {
        escolhida = buscaPorId(idUF);
        if (!escolhida) {
            msgaErro = "UF não encontrada";
        }
    } else {
        msgaErro = "requisição invalida";
    }

    if (escolhida) {
        res.status(200).json(escolhida)
    }
    else {
        res.status(404).json({ message: msgaErro })
    }
});



app.get("/cidades", (req, res) => {
    const nomeUf = req.query.search;
    if (nomeUf) {
        const resultado = nomeUf ? buscaUfsPorNome(nomeUf) : cidades;
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: "nenhuma Uf Encontrada" })
        }
    } else {
        res.status(404).json({ message: "Parametro de pesquisa Vazio ou Incorreto" })
    }
});
app.put("/cidades/update/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const verificaEnty = buscaPorId(id)
    if (!verificaEnty) {
        res.status(404).json("Nao encontrada nenhuma uf com o id passado")
    }

    const cidade = req.body.nome
    const uf = req.body.uf
    const novaCidade = atualizaCidade(id, uf, cidade)
    res.status(200).json(novaCidade)
    if (!novaCidade) {
        res.status(400).json({ message: "Erro interno do servidor" })
    }
})




app.post("/cidades", (req, res) => {
    const newCity = req.body
    cidades.push(newCity)
    res.status(200).json({ NewCity: newCity });
})



app.delete("/cidades/delete/:id", (req, res) => {
    const id = req.params.id;
    const deletedCity = buscaPorId(id)
    cidades.splice(id - 1, 1);
    res.status(200).json(deletedCity)
})

app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
})


