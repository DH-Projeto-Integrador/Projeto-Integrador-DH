const { Model, DataTypes } = require("sequelize");

//Modelagem das tabelas
class VendaItem extends Model {
  static init(sequelize) {
    super.init(
      {
        qty_products: DataTypes.DATE,
        price_sold: DataTypes.DECIMAL,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Produtos, { through:'venda_itens', foreignKey: 'id_product', as: 'produto' });
    this.belongsToMany(models.Vendas, { through:'venda_itens', foreignKey: 'id_sale', as: 'Venda' });
  }
}

module.exports = VendaItem;
