const express = require('express');
//Importação dos controllers
const CategoriaController = require('../controllers/CategoriaController');
//const ProdutoController = require('./controllers/ProdutoController');

const routes = express.Router();

//Rotas da tabela de Categorias
routes.get('/categorias', CategoriaController.getAll);
routes.post('/categorias',CategoriaController.store);
routes.get('/categorias/:id',CategoriaController.getById);
routes.patch('/categorias/:id',CategoriaController.updateById);
routes.delete('/categorias/:id',CategoriaController.deleteById);

//routes.get('/produtos', ProdutoController.index);
//routes.post('/categoria/:categoria_id/produtos',ProdutoController.store);

module.exports = routes;