const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

// Importação de Rotas
const perfilUsuario = require("./routers/perfil-usuario");
const cadastroUsuario = require("./routers/cadastro-usuario");

// Rotas
app.use("/", cadastroUsuario);
app.use("/", perfilUsuario);

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Demais Configurações
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
