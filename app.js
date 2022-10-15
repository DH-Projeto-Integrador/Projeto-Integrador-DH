require('dotenv')
    .config();

const express = require("express");
const path = require("path");
const cors = require('cors');
const app = express();

require('./src/database');

//Configutações
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));
app.use(cors());

// Importação de Rotas
const cadastroUsuario = require("./src/routers/cadastroUsuario");
const perfilUsuario = require("./src/routers/perfilUsuario");
const home = require('./src/routers/home');
const produto = require('./src/routers/produto');
const login = require('./src/routers/login');
const recuperarSenha = require('./src/routers/recuperarSenha');
const sobre = require('./src/routers/sobre');
const carrinho = require('./src/routers/carrinho');
const routesDb = require('./src/routers/routesDb');

// Rotas
app.use("/", cadastroUsuario);
app.use("/", perfilUsuario);
app.use('/', home);
app.use('/', produto);
app.use('/', login);
app.use('/', recuperarSenha);
app.use('/', sobre);
app.use('/', carrinho);
app.use('/', routesDb);

// Dev
app.get('/dev/header', (req,res) => res.sendFile(path.join(__dirname, "/src/views/header.dev.html")))

app.listen(process.env.SERVER_PORT, console.log(`Servidor rodando`));
