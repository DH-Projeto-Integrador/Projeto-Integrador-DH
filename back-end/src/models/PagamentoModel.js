const { Model, DataTypes } = require("sequelize");

//Modelagem das tabelas
class Pagamentos extends Model {
  static init(sequelize) {
    super.init(
      {
        type_payment: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Vendas, {
      foreignKey: "id_type_payments",
      as: "venda",
    });
  }
}

module.exports = Pagamentos;
