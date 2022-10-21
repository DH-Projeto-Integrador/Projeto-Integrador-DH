//Importação do sequelize
const Sequelize = require("sequelize");

//Importação das configurações do banco de dados
const dbConfig = require("../config/database");

//Conexão do Sequelize com o banco de dados
const connection = new Sequelize(dbConfig);

//Importação das models
const Categoria = require("../models/CategoriaModel");
const Fornecedor = require("../models/FornecedorModel");
const Produtos = require("../models/ProdutoModel");
const Pagamento = require("../models/PagamentoModel");
const Usuario = require("../models/UsuarioModel");
const Venda = require("../models/VendaModel");
const VendaItem = require("../models/VendaItemModel");

//Inicialização das models
Categoria.init(connection);
Fornecedor.init(connection);
Produtos.init(connection);
Pagamento.init(connection);
Usuario.init(connection);
Venda.init(connection);
VendaItem.init(connection);

//Associação das models
Produtos.associate(connection.models);
Venda.associate(connection.models);
VendaItem.associate(connection.models);

module.exports = connection;
