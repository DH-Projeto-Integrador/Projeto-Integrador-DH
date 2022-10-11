const express = require('express');
//Importação dos controllers
const CategoriaController = require('../controllers/CategoriaController');
const FornecedorController = require('../controllers/FornecedorController');
const ProdutoController = require('../controllers/ProdutoController');
const PagamentoController = require('../controllers/PagamentoController');

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

//Rotas da tabela de Produtos
routes.get('/produtos',ProdutoController.getAll);
routes.post('/categorias/:id_category/produtos',ProdutoController.store);
routes.get('/produtos/:id',ProdutoController.getById);
routes.patch('/produtos/:id',ProdutoController.updateById);
routes.delete('/produtos/:id',ProdutoController.deleteById);

//Rotas da tabela de Pagamentos
routes.get('/pagamento', PagamentoController.getAll);
routes.post('/pagamento',PagamentoController.store);
routes.get('/pagamento/:id',PagamentoController.getById);
routes.patch('/pagamento/:id',PagamentoController.updateById);
routes.delete('/pagamento/:id',PagamentoController.deleteById);


module.exports = routes;