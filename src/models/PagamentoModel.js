const { Model, DataTypes } = require('sequelize');

//Modelagem das tabelas
class Pagamentos extends Model {
    static init(sequelize) {
        super.init({
            type_payment: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Pagamentos;