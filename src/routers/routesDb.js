const express = require('express');
//Importação dos controllers
const CategoriaController = require('../controllers/CategoriaController');
//const ProdutoController = require('./controllers/ProdutoController');

const routes = express.Router();

//Rotas da tabela de Categorias
routes.get('/categorias', CategoriaController.index);
routes.post('/categorias',CategoriaController.store);

//routes.get('/produtos', ProdutoController.index);
//routes.post('/categoria/:categoria_id/produtos',ProdutoController.store);

module.exports = routes;