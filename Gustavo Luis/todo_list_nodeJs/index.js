import express from "express";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import tasksArray from "./src/data/data.js";
import bodyParser from "body-parser"

const app = express();
const port = 80;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure static files and view engine
app.use(express.static('express'));
app.use('/public', express.static(join(__dirname, 'public')));
app.set('views', join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Parse URL-encoded bodies

let tasks = [...tasksArray];

// Routes
app.get('/', (req, res) => {
    res.render('index', { taskList: tasks });
});

app.get("/deletar/:id", (req, res) => {
    tasks = tasks.filter(function (val, index) {
        if (index != req.params.id) {
            return val
        }
    });
    res.render("index", { taskList: tasks });
});

app.post("/", (req, res) => {
    tasks.push(req.body.task)
    res.render("index", { taskList: tasks });
})

// Start the server
app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
});
