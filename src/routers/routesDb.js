const express = require('express');
//Importação dos controllers
const CategoriaController = require('../controllers/CategoriaController');
const FornecedorController = require('../controllers/FornecedorController');
//const ProdutoController = require('./controllers/ProdutoController');

const routes = express.Router();

//Rotas da tabela de Categorias
routes.get('/categorias', CategoriaController.getAll);
routes.post('/categorias',CategoriaController.store);
routes.get('/categorias/:id',CategoriaController.getById);
routes.patch('/categorias/:id',CategoriaController.updateById);
routes.delete('/categorias/:id',CategoriaController.deleteById);

//Rotas da tabela de Fornecedores
routes.get('/fornecedores', FornecedorController.getAll);
routes.post('/fornecedores', FornecedorController.store);
routes.get('/fornecedores/:id', FornecedorController.getById);
routes.patch('/fornecedores/:id', FornecedorController.updateById);
routes.delete('/fornecedores/:id', FornecedorController.deleteById);

//routes.get('/produtos', ProdutoController.index);
//routes.post('/categoria/:categoria_id/produtos',ProdutoController.store);

module.exports = routes;