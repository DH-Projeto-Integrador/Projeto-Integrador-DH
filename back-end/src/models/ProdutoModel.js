const { Model, DataTypes } = require("sequelize");

//Modelagem das tabelas
class Produtos extends Model {
  static init(sequelize) {
    super.init(
      {
        image_product: DataTypes.STRING,
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity_stock: DataTypes.INTEGER,
        description: DataTypes.STRING(1000),
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Categorias, {
      foreignKey: "id_category",
      as: "categoria",
    });
    this.belongsTo(models.Fornecedores, {
      foreignKey: "id_provider",
      as: "fornecedor",
    });
    this.belongsToMany(models.VendaItem, {
      through: "venda_itens",
      foreignKey: "id_product",
      as: "venda",
    });
  }
}

module.exports = Produtos;
