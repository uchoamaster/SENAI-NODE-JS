import express from "express"
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
    res.send(`<h1 style="color:blue" > Criando um Servidor em NodeJs+Express</h1>`)
})
app.get('/sobre', (req, res) => {
    res.send(`<h1 style="color:blue" >Pagina Sobre </h1>`)
})
app.get('/contato', (req, res) => {
    res.send(`<h1 style="color:blue" >Pagina de Contato</h1>`)
})
app.get('/empresa', (req, res) => {
    res.send(`<h1 style="color:blue" >Pagina Empresa</h1>`)
})