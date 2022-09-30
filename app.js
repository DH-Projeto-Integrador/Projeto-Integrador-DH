const express = require("express");
const path = require("path");
const app = express();

//Configutações
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

// Importação de Rotas
const cadastroUsuario = require("./src/routers/cadastroUsuario");
const perfilUsuario = require("./src/routers/perfil-usuario");
const home = require('./src/routers/home');
const produto = require('./src/routers/produto');
const login = require('./src/routers/login');
const recuperarSenha = require('./src/routers/recuperarSenha');
const sobre = require('./src/routers/sobre');
const carrinho = require('./src/routers/carrinho');

// Rotas
app.use("/", cadastroUsuario);
app.use("/", perfilUsuario);
app.use('/', home);
app.use('/', produto);
app.use('/', login);
app.use('/', recuperarSenha);
app.use('/', sobre);
app.use('/', carrinho);

// Dev
app.get('/dev/header', (req,res) => res.sendFile(path.join(__dirname, "/src/views/header.dev.html")))

app.listen(3000, () => console.log(`Servidor rodando na porta ${3000}`));
