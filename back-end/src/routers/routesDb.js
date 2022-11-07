const express = require("express");
const routes = express.Router();

//Importação dos middlewares
const { Authorize } = require("../middlewares/Authentication")

//Importação dos controllers
const { ValidationUser } = require("../controllers/AuthController")
const CategoriaController = require("../controllers/CategoriaController");
const FornecedorController = require("../controllers/FornecedorController");
const ProdutoController = require("../controllers/ProdutoController");
const PagamentoController = require("../controllers/PagamentoController");
const UsuarioController = require("../controllers/UsuarioController");
const VendaController = require("../controllers/VendaController");

//Rota de autenticação
routes.get("/auth", ValidationUser)

//Rotas da tabela de Usuario
routes.get("/usuario", UsuarioController.getAll);
routes.post("/usuario", UsuarioController.store);
routes.get("/usuario/:id", UsuarioController.getById);
routes.patch("/usuario/:id", UsuarioController.updateById);
routes.delete("/usuario/:id", UsuarioController.deleteById);

//Rotas da tabela de Categorias
routes.get("/categorias", CategoriaController.getAll);
routes.post("/categorias", CategoriaController.store);
routes.get("/categorias/:id", CategoriaController.getById);
routes.patch("/categorias/:id", CategoriaController.updateById);
routes.delete("/categorias/:id", CategoriaController.deleteById);

//Rotas da tabela de Fornecedores
routes.get("/fornecedores", FornecedorController.getAll);
routes.post("/fornecedores", FornecedorController.store);
routes.get("/fornecedores/:id", FornecedorController.getById);
routes.patch("/fornecedores/:id", FornecedorController.updateById);
routes.delete("/fornecedores/:id", FornecedorController.deleteById);

//Rotas da tabela de Produtos
routes.get("/", ProdutoController.getAll);
routes.post("/categorias/:id_category/produtos", ProdutoController.store);
routes.get("/:id", ProdutoController.getById);
routes.patch("/produtos/:id", ProdutoController.updateById);
routes.delete("/produtos/:id", ProdutoController.deleteById);

//Rotas da tabela de Pagamentos
routes.get("/pagamento", PagamentoController.getAll);
routes.post("/pagamento", PagamentoController.store);
routes.get("/pagamento/:id", PagamentoController.getById);
routes.patch("/pagamento/:id", PagamentoController.updateById);
routes.delete("/pagamento/:id", PagamentoController.deleteById);

//Rotas da tabela de Venda
routes.get("/venda", VendaController.getAll);
routes.post("/venda", VendaController.store);
routes.get("/venda/:id", VendaController.getById);
routes.patch("/venda/:id", VendaController.updateById);
routes.delete("/venda/:id", VendaController.deleteById);

module.exports = routes;
