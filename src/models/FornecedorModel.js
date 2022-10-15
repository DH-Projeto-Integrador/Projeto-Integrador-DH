const { Model, DataTypes } = require('sequelize');

//Modelagem das tabelas
class Fornecedores extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
        static associate(models) {
        this.hasMany(models.Produtos , { foreignKey: 'id_provider', as: 'produto' });
    }
}

module.exports = Fornecedores;