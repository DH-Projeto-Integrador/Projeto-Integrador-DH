const { Model, DataTypes } = require("sequelize");

//Modelagem das tabelas
class Vendas extends Model {
  static init(sequelize) {
    super.init(
      {
        date_sell: DataTypes.DATE,
        amount: DataTypes.DECIMAL,
        status_sale: DataTypes.ENUM("Aguardando Pagamento", "Pagamento Efetuado"),
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Usuarios, { foreignKey: "id_users", as: "usuarios" });
    this.belongsTo(models.Pagamentos, {
      foreignKey: "id_type_payments",
      as: "pagamentos",
    });
    this.belongsToMany(models.VendaItem, {
      through: "venda_itens",
      foreignKey: "id_sale",
      as: "venda",
    });
  }
}

module.exports = Vendas;
