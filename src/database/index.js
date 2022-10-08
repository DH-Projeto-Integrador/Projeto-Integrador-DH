//Importação do sequelize
const Sequelize = require('sequelize');

//Importação das configurações do banco de dados
const dbConfig = require('../config/database');

//Conexão do Sequelize com o banco de dados
const connection = new Sequelize(dbConfig);

//Importação das models
const Categoria = require('../models/CategoriaModel');


//Inicialização das models
Categoria.init(connection);

//Associação das models
//Categoria.associate(connection.models);

module.exports = connection;