require("dotenv").config();
require("./src/database");

const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

//Configutações
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));
app.use(cors());

// Importação de Rotas
const routesDb = require("./src/routers/routesDb");

// Rotas
app.use("/", routesDb);

app.listen(process.env.SERVER_PORT, console.log(`Servidor rodando`));
