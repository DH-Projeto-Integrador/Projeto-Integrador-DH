const express = require("express");
const path = require("path");
const app = express();

// Importação de Rotas
const perfilUsuario = require("./routers/perfil-usuario");
const cadastroUsuario = require("./routers/cadastro-usuario");
const home = require('../src/routers/home');
const produto = require('../src/routers/produto');

// Rotas
app.use("/", cadastroUsuario);
app.use("/", perfilUsuario);
app.use('/', home);
app.use('/', produto);

// Rotas testes
app.get("/footer", (req, res) => {
  res.render("footer");
});

app.get("/header", (req, res) => {
  res.render("header");
});

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
