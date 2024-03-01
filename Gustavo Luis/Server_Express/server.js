import express from "express";
import "dotenv/config";
import veiculos from "./src/arrays/arrays.js";

const app = express();
app.use(express.json())
const port = process.env.PORT;


app.use(express.urlencoded({ extended: true }))





app.get("/", (req, res) => {
    res.status(200).send(`<h1>Rotas com express </h1>`)
})
app.get("/user/:nome", (req, res) => {
    res.status(200).send(`<h1>Usuario - ${req.params.nome}</h1>`)
});

app.get("/cars", (req, res) => {
    res.status(200).json(veiculos);
});

app.get("/cars/:id", (req, res) => {
    const id = req.params.id;
    const veiculoPesq = veiculos[id]
    res.status(200).json(veiculoPesq)
});
app.post("/cars", (req, res) => {
    const newCar = req.body.name
    veiculos.push(newCar)
    res.status(200).json({ NewCar: newCar });
})

app.put("/cars/update/:id", (req, res) => {
    const id = req.params.id;
    const curentCar = veiculos[id];
    try {
        veiculos[id] = req.body.name;
        const updatedCar = veiculos[id];
        res.status(200).json({ oldCar: curentCar, newCar: updatedCar });
    } catch (err) {
        res.status(400).json({ Error: "Erro de requisiçao ou interno do servidor" })
    }
})

app.delete("/cars/delete/:id", (req, res) => {
    const id = req.params.id;
    const deletedCar = veiculos[id];
    veiculos.splice(id, 1);
    res.status(200).json(deletedCar)
})













app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
})


