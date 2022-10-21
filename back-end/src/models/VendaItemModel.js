const { Model, DataTypes } = require("sequelize");

//Modelagem das tabelas
class VendaItem extends Model {
  static init(sequelize) {
    super.init(
      {
        qty_products: DataTypes.DATE,
        price_sold: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Produtos, {
      foreignKey: "id_product",
      as: "produto",
    });
    this.belongsTo(models.Vendas, { foreignKey: "id_sale", as: "Venda" });
  }
}

module.exports = VendaItem;
