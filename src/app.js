const express = require("express");
const path = require("path");
const app = express();

// Importação de Rotas
const perfilUsuario = require("./routers/perfil-usuario");
const cadastroUsuario = require("./routers/cadastro-usuario");

// Rotas
app.use("/", cadastroUsuario);
app.use("/", perfilUsuario);

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

app.listen(3000, () => console.log(`Servidor rodando na porta ${3000}`));
