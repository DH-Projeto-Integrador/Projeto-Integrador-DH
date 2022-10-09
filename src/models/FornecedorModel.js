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
}

module.exports = Fornecedores;