const { Model, DataTypes } = require("sequelize");

//Modelagem das tabelas
class Categorias extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Produtos, { foreignKey: "id_category", as: "produto" });
  }
}

module.exports = Categorias;
